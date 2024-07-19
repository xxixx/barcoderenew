import { sql } from '~~/server/db';

export type WorkOrderModel =  {
  NO: number;
  WORKING_PART: number;
  COUNT: number;
  CREATE_DATE: string;
  STATE: number;
  ORDER_STATE: number;
  REG_ACCOUNT: number;
  ORDER_ACCOUNT: string;
  JAEDAN_PART_NAME: string
  PD_NAME: string
  UPDATE_ACCOUNT: number;
 };

 export const registerOrder = async (data: Pick<WorkOrderModel, 'CREATE_DATE' |'WORKING_PART' |  'COUNT'|'REG_ACCOUNT' >) => {
  const result = (await sql({
    query: `
      INSERT INTO WORKING_ORDER (
        CREATE_DATE,
        WORKING_PART,
        COUNT,
        REG_ACCOUNT
        ) VALUES (
          ?,
          ?,
          ?,
          ?
        )
    `,
    values: [ data.CREATE_DATE,data.WORKING_PART, data.COUNT,data.REG_ACCOUNT]
  })) as any;

  return result.length === 1 ? (result[0] as WorkOrderModel) : null;
};
// export const updateState = async (NO: string) => {
//   const result = (await sql({
//     query: 'UPDATE WORKING_ORDER SET STATE = 1 WHERE NO = ?',
//     values: [NO]
//   })) as any;

//   return result.affectedRows === 1 ? { success: true } : { success: false };
// };
export const updateState = async (NO: string, STATE: number,UPDATE_ACCOUNT: number) => {
  const result = (await sql({
    query: 'UPDATE WORKING_ORDER SET STATE = ?, UPDATE_ACCOUNT = ? WHERE NO = ?',
    values: [STATE, UPDATE_ACCOUNT,NO]
  })) as any;

  return result.affectedRows === 1 ? { success: true } : { success: false };
};


export const getOrder = async () => {
  const result = await sql({
    query: `SELECT *
    FROM WORKING_ORDER
    JOIN WORKING_PART ON WORKING_ORDER.WORKING_PART = WORKING_PART.ID
    ; 
    `
  });

  // SELECT *
  //   FROM WORKING_ORDER wo
  //   JOIN PRODUCT pd ON wo.PRODUCT = pd.NO
  //   WHERE wo.PRODUCT = pd.NO;`
  return result as WorkOrderModel[];
};
export const getOrderWithAccount = async () => {
  const result = await sql({
    query: `SELECT wo.*, wp.*, a.NAME, a.EMAIL, a.NO as ACCOUNT_NO
    FROM WORKING_ORDER wo
    JOIN WORKING_PART wp ON wo.WORKING_PART = wp.ID
    JOIN ACCOUNT a ON wo.REG_ACCOUNT = a.NO
    where wo.STATE = 0;
    `
  });

  // SELECT *
  //   FROM WORKING_ORDER wo
  //   JOIN PRODUCT pd ON wo.PRODUCT = pd.NO
  //   WHERE wo.PRODUCT = pd.NO;`
  return result as WorkOrderModel[];
};
export const getOrderWithAccountAll = async () => {
  const result = await sql({
    query: `SELECT wo.*, wp.*, a.NAME, a.EMAIL, a.NO as ACCOUNT_NO
    FROM WORKING_ORDER wo
    JOIN WORKING_PART wp ON wo.WORKING_PART = wp.ID
    JOIN ACCOUNT a ON wo.REG_ACCOUNT = a.NO
   ;
    `
  });

  return result as WorkOrderModel[];
};
export const getRecord10 = async () => {
  const result = await sql({
    query: `SELECT * FROM WORKING_ORDER ORDER BY CREATE_DATE DESC LIMIT 10;`
  });

  return result as WorkOrderModel[];
};
export const getAllData = async () => {
  const result = await sql({
    // query: 'SELECT no, DATE, PART,CATEGORY, SUB_CATEGORY,COUNT FROM DEFECTIVE_DATA'
    query: `
    SELECT *  FROM WORKING_ORDER
    
    ORDER BY CREATED_DATE DESC
    `
  });

  return result as WorkOrderModel[];
};

export const detail = async (NO: string) => {
  const result = (await sql({
    query: 'SELECT wo.*, wp.* FROM WORKING_ORDER wo JOIN WORKING_PART wp ON wo.WORKING_PART = wp.ID WHERE wo.NO = ?',
    values: [NO]
  })) as any;

  return result.length === 1 ? (result[0] as WorkOrderModel) : null;
};






export const update = async (no: number, data: Pick<WorkOrderModel, 'DATE' | 'PART' | 'CATEGORY' | 'SUB_CATEGORY' | 'COUNT' | 'ETC'>) => {
  await sql({
    query: `
      UPDATE products
      SET
      DATE = ?,
      PART = ?,
      CATEGORY = ?,
      SUB_CATEGORY = ?,
      COUNT = ?,
      ETC = ?
      WHERE no = ?
    `,
    values: [data.DATE, data.PART,data.CATEGORY, data.SUB_CATEGORY,data.COUNT,data.ETC, no]
  });

  return await detail(no);
};


export const remove = async (NO: string) => {
  console.log("remove",NO)
  await sql({
    query: 'DELETE FROM WORKING_ORDER WHERE NO = ?',
    values: [NO]
  });

  return true;
};

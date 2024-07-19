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
export const updateState = async (NO: string) => {
  const result = (await sql({
    query: 'UPDATE WORKING_ORDER SET STATE = 0 WHERE NO = ?',
    values: [NO]
  })) as any;

  return result.affectedRows === 1 ? { success: true } : { success: false };
};
export const getOrder = async () => {
  const result = await sql({
    query: `SELECT *
    FROM WORKING_ORDER
    JOIN WORKING_PART ON WORKING_ORDER.WORKING_PART = WORKING_PART.ID
    JOIN ACCOUNT ON WORKING_ORDER.REG_ACCOUNT = ACCOUNT.NO;    
    `
  });

  // SELECT *
  //   FROM WORKING_ORDER wo
  //   JOIN PRODUCT pd ON wo.PRODUCT = pd.NO
  //   WHERE wo.PRODUCT = pd.NO;`
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
// export const create = async (data: Pick<WorkOrderModel, 'CREATE_DATE' |'PD_NAME' |  'COUNT'|'REG_ACCOUNT' >) => {
//   const result = (await sql({
//     query: `
//       INSERT INTO WORKING_ORDER (
//         CREATE_DATE,
//         PD_NAME,
//         COUNT,
//         REG_ACCOUNT
//         ) VALUES (
//           ?,
//           ?,
//           ?,
//           ?
//         )
//     `,
//     values: [ data.CREATE_DATE,data.PD_NAME, data.COUNT,data.REG_ACCOUNT]
//   })) as any;

//   return result.length === 1 ? (result[0] as WorkOrderModel) : null;
// };
export const detail = async (NO: string) => {
  const result = (await sql({
    query: 'SELECT wo.*, wp.* FROM WORKING_ORDER wo JOIN WORKING_PART wp ON wo.WORKING_PART = wp.ID WHERE wo.NO = ?',
    values: [NO]
  })) as any;

  return result.length === 1 ? (result[0] as WorkOrderModel) : null;
};

export const partCount = async () => {
  const result = await sql({
    query: `
    SELECT  CATEGORY,SUM(COUNT) as part_count
    FROM DEFECTIVE_DATA
    GROUP BY CATEGORY
    ORDER BY DATE ASC
    LIMIT 30`
  });

  return result as WorkOrderModel[];
};
export const categoryAll = async () => {
  const result = await sql({
    query: `
    SELECT  SUB_CATEGORY,SUM(COUNT) as categoryAll_count
    FROM DEFECTIVE_DATA
    GROUP BY SUB_CATEGORY
    ORDER BY DATE ASC
    LIMIT 30`
  });

  return result as WorkOrderModel[];
};

export const getLastData = async () => {
  const result = await sql({
    // query: 'SELECT no, DATE, PART,CATEGORY, SUB_CATEGORY,COUNT FROM DEFECTIVE_DATA'
    // query: `
    // SELECT *
    // FROM DEFECTIVE_DATA ORDER BY DATE DESC LIMIT 10
    
    // `
    query: `
    SELECT *
    FROM DEFECTIVE_DATA ORDER BY DATE DESC LIMIT 10
    `
  });

  return result as WorkOrderModel[];
};
export const get10 = async () => {
  const result = await sql({
    // query: 'SELECT no, DATE, PART,CATEGORY, SUB_CATEGORY,COUNT FROM DEFECTIVE_DATA'
    query: `
    SELECT DATE, CATEGORY,SUB_CATEGORY
    FROM DEFECTIVE_DATA LIMIT 10`
  });

  return result as WorkOrderModel[];
};
export const getPart = async () => {
  const result = await sql({
    // query: 'SELECT no, DATE, PART,CATEGORY, SUB_CATEGORY,COUNT FROM DEFECTIVE_DATA'
    query: `
    SELECT PART
    FROM PD_NAME`
  });

  return result as WorkOrderModel[];
};
export const getCategory = async () => {
  const result = await sql({
    // query: 'SELECT no, DATE, PART,CATEGORY, SUB_CATEGORY,COUNT FROM DEFECTIVE_DATA'
    query: `
    SELECT *
    FROM DEFECTIVE_CAT`
  });

  return result as WorkOrderModel[];
};
export const getSubCategory = async () => {
  const result = await sql({
    // query: 'SELECT no, DATE, PART,CATEGORY, SUB_CATEGORY,COUNT FROM DEFECTIVE_DATA'
    query: `
    SELECT *
    FROM DEFECTIVE_SUB_CAT`
  });

  return result as WorkOrderModel[];
};
// export const insertData = async () => {
//   const result = await sql({
//     // query: 'SELECT no, DATE, PART,CATEGORY, SUB_CATEGORY,COUNT FROM DEFECTIVE_DATA'
//     query: `
//     SELECT DATE, PART,CATEGORY, SUB_CATEGORY,COUNT,ETC,CREATED_DATE
//     FROM DEFECTIVE_DATA
//     WHERE DATE(CREATED_DATE) = CURRENT_DATE LIMIT 10;`
//   });

//   return result as DefectiveModel[];
// };
export const insertData = async () => {
  const result = await sql({
    // query: 'SELECT no, DATE, PART,CATEGORY, SUB_CATEGORY,COUNT FROM DEFECTIVE_DATA'
    query: `
    SELECT *
    FROM DEFECTIVE_DATA
    WHERE DATE(CREATED_DATE) = CURRENT_DATE LIMIT 10;`
  });

  return result as WorkOrderModel[];
};

// export const detail = async (no: string) => {
//   const result = (await sql({
//     query: 'SELECT id, date, part, category,sub_category,count FROM DEFECTIVE_DATA WHERE no = ?',
//     values: [no]
//   })) as any;

//   return result.length === 1 ? (result[0] as WorkOrderModel) : null;
// };

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

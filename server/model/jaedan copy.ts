import { sql } from '~~/server/db';


 export type JaedanModel =  {
  NO: any;
  WORK_ORDER_NO: any;
  WONDAN_STORE: any;
  WONDAN_MANAGER_NO: any;
  LOT: any;
  LENGTH: any;
  Y_COUNT: any;
  MARKS: any;
  COUNT: any;
  DEFECTIVE: any;
  CREATE_DATE: any;
  REG_ACCOUNT: any;
  WORK_DATE: any;
  STATE: any;
 };


export const getRecord = async () => {
  const result = await sql({
    query: `SELECT * FROM JAEDAN_REGIST`
  });

  return result as JaedanModel[];
};
export const getRecord10 = async () => {
  const result = await sql({
    query: `SELECT * FROM JAEDAN_REGIST ORDER BY CREATE_DATE DESC LIMIT 10;`
  });

  return result as JaedanModel[];
};
export const getAllData = async () => {
  const result = await sql({
    // query: 'SELECT no, DATE, PART,CATEGORY, SUB_CATEGORY,COUNT FROM DEFECTIVE_DATA'
    query: `
    SELECT DATE, PART, CATEGORY, SUB_CATEGORY,COUNT, ETC, CREATED_DATE  FROM DEFECTIVE_DATA
    
    ORDER BY DATE DESC
    `
  });
  return result as JaedanModel[];
};

export const register = async (data: Pick<JaedanModel, 'WORK_ORDER_NO' | 'WONDAN_STORE' | 'WONDAN_MANAGER_NO' | 'LOT' | 'Y_COUNT' | 'MARKS' | 'COUNT' | 'DEFECTIVE' | 'CREATE_DATE' | 'WORK_DATE' | 'REG_ACCOUNT' >) => {
  const result = (await sql({
    query: `
      INSERT INTO JAEDAN_REGIST (
        WORK_ORDER_NO,
        WONDAN_STORE,
        WONDAN_MANAGER_NO,
        LOT,
        Y_COUNT,
        MARKS,
        COUNT,
        DEFECTIVE,
        CREATE_DATE,
        WORK_DATE,
        REG_ACCOUNT
        ) VALUES (
          ?,
          ?,
          ?,
          ?,
          ?,
          ?,
          ?,
          ?,
          ?,
          ?,
          ?
        )
    `,
    values: [data.WORK_ORDER_NO, data.WONDAN_STORE, data.WONDAN_MANAGER_NO, data.LOT, data.Y_COUNT, data.MARKS, data.COUNT, data.DEFECTIVE, data.CREATE_DATE, data.WORK_DATE, data.REG_ACCOUNT ]
  })) as any;
console.log("result============",result)
  return result.length === 1 ? (result[0] as JaedanModel) : null;
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

  return result as DefectiveCategoryModel[];
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

  return result as DefectiveCategoryModel[];
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

  return result as DefectiveModel[];
};
export const get10 = async () => {
  const result = await sql({
    // query: 'SELECT no, DATE, PART,CATEGORY, SUB_CATEGORY,COUNT FROM DEFECTIVE_DATA'
    query: `
    SELECT DATE, CATEGORY,SUB_CATEGORY
    FROM DEFECTIVE_DATA LIMIT 10`
  });

  return result as DefectiveModel[];
};
export const getPart = async () => {
  const result = await sql({
    // query: 'SELECT no, DATE, PART,CATEGORY, SUB_CATEGORY,COUNT FROM DEFECTIVE_DATA'
    query: `
    SELECT PART
    FROM PD_NAME`
  });

  return result as DefectiveCategoryModel[];
};
export const getCategory = async () => {
  const result = await sql({
    // query: 'SELECT no, DATE, PART,CATEGORY, SUB_CATEGORY,COUNT FROM DEFECTIVE_DATA'
    query: `
    SELECT *
    FROM DEFECTIVE_CAT`
  });

  return result as DefectiveCategoryModel[];
};
export const getSubCategory = async () => {
  const result = await sql({
    // query: 'SELECT no, DATE, PART,CATEGORY, SUB_CATEGORY,COUNT FROM DEFECTIVE_DATA'
    query: `
    SELECT *
    FROM DEFECTIVE_SUB_CAT`
  });

  return result as DefectiveCategoryModel[];
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

  return result as DefectiveModel[];
};

export const detail = async (PD_NAME: string) => {
  const result = (await sql({
    // query: 'SELECT id, date, part, category,sub_category,count FROM DEFECTIVE_DATA WHERE no = ?',
    query: 'SELECT *t FROM JEADAN_ITEM WHERE PRODUCT = ?',
    values: [PD_NAME]
  })) as any;

  return result.length === 1 ? (result[0] as DefectiveModel) : null;
};

export const update = async (no: number, data: Pick<DefectiveModel, 'DATE' | 'PART' | 'CATEGORY' | 'SUB_CATEGORY' | 'COUNT' | 'ETC'>) => {
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
    query: 'DELETE FROM JAEDAN_REGIST WHERE NO = ?',
    values: [NO]
  });

  return true;
};

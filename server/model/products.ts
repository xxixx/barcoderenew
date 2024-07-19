import { sql } from '~~/server/db';


export type ProductsModel = {
  NO: any;
  PRODUCT_ID: any;
  CAR: any;
  PRODUCT_NAME: any;
  PRODUCT_BARCODE: any;
  PRODUCT_PART: any;
  
};

export const getProductsByProductCode = async (productsCode: string) => {
  const result = await sql({
    // query: `SELECT * FROM PRODUCTION WHERE PROCESS_CODE = ?`,
    query: `SELECT  pr.*, pc.LAST_SERIAL_NUMBER as LAST_SERIAL_NUMBER2 FROM PRODUCTS pr
JOIN PRODUCTS_BARCODE_COUNT pc ON pr.PRODUCT_CODE = pc.PRODUCT_CODE
WHERE pr.PRODUCT_CODE = ?`,
    values: [productsCode]
  });

  console.log('productsCode', productsCode);

  return result[0] as ProductsModel | undefined;
};

export const updateLastSerialNumber = async (productsCode: string, lastSerialNumber: number) => {
  await sql({
    query: `UPDATE PRODUCTS_BARCODE_COUNT SET LAST_SERIAL_NUMBER = ? WHERE PROCESS_CODE = ?`,
    values: [lastSerialNumber, productsCode]
  });
  console.log('lastSerialNumber processCode', lastSerialNumber,productsCode);

};



export const getRecord10 = async () => {
  const result = await sql({
    query: `SELECT
    jr.*,
    ACCOUNT.NAME as REG_ACCOUNT_NAME,
    wp.JAEDAN_PART_NAME,  -- 원하는 컬럼 선택
    PRODUCTION_ACCOUNT.NAME as PRODUCTION_ACCOUNT_NAME,wp.*,
    PROCESS_BARCODE_COUNT.*
  FROM
    JAEDAN_REGIST jr
  JOIN
    WORKING_ORDER wo ON jr.WORK_ORDER_NO = wo.NO
  JOIN
    WORKING_PART wp ON wo.WORKING_PART = wp.ID
   JOIN 
   ACCOUNT ON wo.REG_ACCOUNT = ACCOUNT.NO
   JOIN PROCESS_BARCODE_COUNT  ON jr.PROCESSCODE = PROCESS_BARCODE_COUNT.PROCESS_CODE
   LEFT JOIN
    ACCOUNT PRODUCTION_ACCOUNT ON jr.PRODUCTION_ACCOUNT = PRODUCTION_ACCOUNT.NO 
    where jr.STATE = 2 or jr.STATE = 3`
  });

  return result as ProductionModel[];
};
export const getRecord = async () => {
  const result = await sql({
    query: `SELECT
    jr.*,
    ACCOUNT.NAME as REG_ACCOUNT_NAME,
       wp.JAEDAN_PART_NAME  -- 원하는 컬럼 선택
  FROM
    JAEDAN_REGIST jr
  JOIN
    WORKING_ORDER wo ON jr.WORK_ORDER_NO = wo.NO
  JOIN
    WORKING_PART wp ON wo.WORKING_PART = wp.ID
   JOIN ACCOUNT ON wo.REG_ACCOUNT = ACCOUNT.NO ;`
  });

  return result as ProductionModel[];
};
// export const getProductionAllData = async () => {
//   const result = await sql({
//     // query: 'SELECT no, DATE, PART,CATEGORY, SUB_CATEGORY,COUNT FROM DEFECTIVE_DATA'
//     query: `
//     SELECT *  FROM PRODUCTION
    
//     ORDER BY DATE DESC
//     `
//   });
//   return result as ProductionModel[];
// };
// export const getProductionAllData = async () => {
//   const result = await sql({
//     query: `SELECT
//       jr.*,
//       ACCOUNT.NAME as REG_ACCOUNT_NAME,
//       wp.JAEDAN_PART_NAME, -- 원하는 컬럼 선택
//       PRODUCTION_ACCOUNT.NAME as PRODUCTION_ACCOUNT_NAME
//     FROM
//       JAEDAN_REGIST jr
//     JOIN
//       WORKING_ORDER wo ON jr.WORK_ORDER_NO = wo.NO
//     JOIN
//       WORKING_PART wp ON wo.WORKING_PART = wp.ID
//     JOIN
//       ACCOUNT ON wo.REG_ACCOUNT = ACCOUNT.NO
//     LEFT JOIN
//       ACCOUNT PRODUCTION_ACCOUNT ON jr.PRODUCTION_ACCOUNT = PRODUCTION_ACCOUNT.NO
//     where jr.STATE = 2 or jr.STATE = 3`
//   });

//   return result as ProductionModel[];
// };





export const getBarcodeCount = async (processCode: string) => {
  const result = await sql({
    query: 'SELECT BARCODE_COUNT FROM PROCESS_BARCODE_COUNT WHERE PROCESS_CODE = ?',
    values: [processCode]
  });

  return result;
};



export const register = async (data: Pick<ProductionModel, 'JAEDAN_NO' | 'PROCESS_CODE' | 'STATE' >) => {
  const result = (await sql({
    query: `
      INSERT INTO PRODUCTION (
        JAEDAN_NO,
        PROCESS_CODE,
        STATE
      ) VALUES (
        ?,
        ?,
        ?
      )
    `,
    values: [
      data.JAEDAN_NO,
      data.PROCESS_CODE,
      data.STATE     
    ]
  })) as any;

  console.log("result============", result);
  return result.affectedRows === 1 ? data : null;  // 수정: 반환된 데이터를 검증 후 반환
};
// export const updateState = async (NO: string, PD_STATE: number,PD_ACCOUNT: number,PD_DATE: string) => {
//   const result = (await sql({
//     query: 'UPDATE JAEDAN_REGIST SET PD_STATE = ?, PD_ACCOUNT = ?,PD_DATE = ? WHERE NO = ?',
//     values: [PD_STATE, PD_ACCOUNT,PD_DATE,NO]
//   })) as any;

//   return result.affectedRows === 1 ? { success: true } : { success: false };
// };
export const updateState = async (NO: string,STATE: number, PD_STATE: number, PD_ACCOUNT: number, PD_DATE: string) => {
  // 날짜 포맷 변환
  const formattedDate = PD_DATE.split('T')[0];
  // 또는
  // const formattedDateTime = PD_DATE.replace('T', ' ').substring(0, 19);

  const result = (await sql({
    query: 'UPDATE JAEDAN_REGIST SET STATE =?, PD_STATE = ?, PD_ACCOUNT = ?, PD_DATE = ? WHERE NO = ?',
    values: [STATE,PD_STATE, PD_ACCOUNT, formattedDate, NO] // 여기에 formattedDate 사용
  })) as any;

  return result.affectedRows === 1 ? { success: true } : { success: false };
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

  return result as ProductionModel[];
};

export const detail = async (PD_NAME: string) => {
  const result = (await sql({
    // query: 'SELECT id, date, part, category,sub_category,count FROM DEFECTIVE_DATA WHERE no = ?',
    query: 'SELECT *t FROM JEADAN_ITEM WHERE PRODUCT = ?',
    values: [PD_NAME]
  })) as any;

  return result.length === 1 ? (result[0] as ProductionModel) : null;
};
export const getDetail = async (NO: string) => {
  const result = (await sql({
    query:
      'SELECT jr.NO, jr.WORK_ORDER_NO, DATE_FORMAT(jr.CREATE_DATE, "%Y-%m-%d") as CREATE_DATE, DATE_FORMAT(jr.WORK_DATE, "%Y-%m-%d") as WORK_DATE, jr.COUNT, jr.LOT, ac.NAME as regAccount, ac2.NAME as updateAccount, wp.PUMBUN,wp.ASSY_PART_NAME,wp.ASSY_SUB_PART_NAME,wp.JAEDAN_PART_NAME,PROCESSCODE FROM JAEDAN_REGIST jr JOIN WORKING_ORDER wo ON jr.WORK_ORDER_NO = wo.NO JOIN ACCOUNT ac ON jr.REG_ACCOUNT = ac.NO JOIN ACCOUNT ac2 ON jr.UPDATE_ACCOUNT = ac2.NO JOIN WORKING_PART wp ON wo.WORKING_PART = wp.ID WHERE jr.NO = ?',
    values: [NO],
  })) as any[];

  return result.length === 1 ? (result[0] as ProductionModel) : null;
};

export const update = async (no: number, data: Pick<ProductionModel, 'DATE' | 'PART' | 'CATEGORY' | 'SUB_CATEGORY' | 'COUNT' | 'ETC'>) => {
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
// export function updateState(arg0: { WORK_ORDER_NO: any; WONDAN_STORE: any; WONDAN_MANAGER_NO: any; LOT: any; Y_COUNT: any; MARKS: any; COUNT: any; DEFECTIVE: any; CREATE_DATE: any; WORK_DATE: any; REG_ACCOUNT: any; }) {
//   throw new Error('Function not implemented.');
// }


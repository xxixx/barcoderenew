import { sql } from '~~/server/db';


export type WondanModel = {
  NO: any;
  REG_DATE: any;
  WONDAN_NAME: any;
  LOT_NO: any;
  LENGTH: any;
  REAL_LENGTH: any;
  SUPPLY: any;
  REG_ACCOUNT: any;
  DEFECTIVE_LENGTH: any;
  STATE: any;
  STATE_DATE: any;
  ETC: any;
  UPDATE_ACCOUNT: any;

 
};


export const getWondanCode = async () => {
  const result = await sql({
    query: `SELECT
        *    
      FROM
      WONDAN
      `
  });

  return result as WondanModel[];
};
export const getRecord = async () => {
  const result = await sql({
    query: `SELECT ws.*, a.NAME as REG_ACCOUNT 
    FROM WONDAN_STORE ws
    JOIN ACCOUNT a ON ws.REG_ACCOUNT = a.NO`
  });

  return result as WondanModel[];
};
export const update = async (NO: number, data: Pick<WondanModel, 'REG_DATE' | 'WONDAN_NAME' | 'LOT_NO' | 'LENGTH' | 'REAL_LENGTH' | 'SUPPLY' | 'DEFECTIVE_LENGTH' |'STATE'>) => {
  try {
    
    await sql({
      query: `
        UPDATE WONDAN_STORE
        SET
        REG_DATE = ?,
        WONDAN_NAME = ?,
        LOT_NO = ?,
        LENGTH = ?,
        REAL_LENGTH = ?,
        SUPPLY = ?,
        DEFECTIVE_LENGTH = ?,
        STATE = ?
        WHERE NO = ?
      `,
      values: [data.REG_DATE, data.WONDAN_NAME, data.LOT_NO, data.LENGTH, data.REAL_LENGTH, data.SUPPLY, data.DEFECTIVE_LENGTH, data.STATE, NO]
    });

    console.log('Update successful');
    return await detail(NO);
  } catch (error) {
    console.error('Update error:', error);
    throw error;
  }
};



export const getUseable = async () => {
  const result = await sql({
    // query: 'SELECT no, DATE, PART,CATEGORY, SUB_CATEGORY,COUNT FROM DEFECTIVE_DATA'
    query: `
    SELECT NO, WONDAN_NAME, DATE_FORMAT(REG_DATE, '%Y-%m-%d') AS REG_DATE, LOT_NO, LENGTH, REAL_LENGTH, SUPPLY, REG_ACCOUNT, DEFECTIVE_LENGTH, STATE, STATE_DATE, ETC  FROM WONDAN_STORE WHERE STATE = 0
    `
  });
  return result as WondanModel[];
};

export const register = async (data:any) => {
  try {
    const existingRecord = await sql({
      query: `
        SELECT * FROM WONDAN_STORE WHERE LOT_NO = ?
      `,
      values: [data.LOT_NO]
    });

    if (existingRecord.length > 0) {
      return {
        statusCode: 400,
        statusMessage: 'LOT_NO already exists'
      };
    }

    const result = await sql({
      query: `
        INSERT INTO WONDAN_STORE (
          REG_DATE,
          WONDAN_NAME,
          LOT_NO,
          LENGTH,
          REAL_LENGTH,
          SUPPLY,
          REG_ACCOUNT,
          DEFECTIVE_LENGTH,
          UPDATE_ACCOUNT
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      values: [
        data.REG_DATE,
        data.WONDAN_NAME,
        data.LOT_NO,
        data.LENGTH,
        data.REAL_LENGTH,
        data.SUPPLY,
        data.REG_ACCOUNT,
        data.DEFECTIVE_LENGTH,
        data.UPDATE_ACCOUNT
      ]
    });

    console.log("result============", result);
    return result.affectedRows === 1 ? data : null;
  } catch (error) {
    console.error("Wondan 게시물 생성 중 오류 발생", error);
    throw error;
  }
};
export const updateState = async (NO: string, STATE: number,UPDATE_ACCOUNT: number) => {
  const result = (await sql({
    query: 'UPDATE WONDAN_STORE SET STATE = ?, UPDATE_ACCOUNT = ? WHERE NO = ?',
    values: [STATE, UPDATE_ACCOUNT,NO]
  })) as any;

  return result.affectedRows === 1 ? { success: true } : { success: false };
};
export const remove = async (NO: string) => {
  console.log("remove",NO)
  await sql({
    query: 'DELETE FROM WONDAN_STORE WHERE NO = ?',
    values: [NO]
  });

  return true;
};



//사용안하는것

export const detail = async (NO: number) => {
  const result = (await sql({
    query: 'SELECT * FROM WONDAN_STORE WHERE NO = ?',
    values: [NO]
  })) as any;

  return result.length === 1 ? (result[0] as WondanModel) : null;
};







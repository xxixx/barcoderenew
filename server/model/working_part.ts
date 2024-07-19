import { sql } from '~~/server/db';

export type WORKING_PART_Model =  {
  NO: number;
  ASSY_PART_NAME: string;
  ASSY_SUB_PART_NAME: string;
  C_PUMBUN: string;
  F_PUMBUN: string;
  JAEDAN_PART_NAME: string;
  WONDAN_NAME: string;
  REG_STATE: string;
};

export const getWORKING_PART = async () => {
  const result = await sql({
    query: 'SELECT * FROM WORKING_PART'
  });

  return result as WORKING_PART_Model[];
};

export const create = async (data: Pick<WORKING_PART_Model, 'name' | 'part'>) => {
  const result = (await sql({
    query: `
      INSERT INTO WORKING_PART (
        name,
        part
      ) VALUES (
        ?,
        ?
      ) 
    
    `,
    values: [data.name, data.part]
  })) as any;

  return result.length === 1 ? (result[0] as WORKING_PART_Model) : null;
};
export const register_order = async (data: Pick<WORKING_PART_Model, 'name' | 'part'>) => {
  const result = (await sql({
    query: `
      INSERT INTO WORKING_PART (
        name,
        part
      ) VALUES (
        ?,
        ?
      ) 
    
    `,
    values: [data.name, data.part]
  })) as any;

  return result.length === 1 ? (result[0] as WORKING_PART_Model) : null;
};

export const detail = async (id: string) => {
  const result = (await sql({
    query: 'SELECT id, name, part, created_date FROM WORKING_PARTs WHERE id = ?',
    values: [id]
  })) as any;

  return result.length === 1 ? (result[0] as WORKING_PART_Model) : null;
};

export const update = async (id: string, data: Pick<WORKING_PART_Model, 'name' | 'part'>) => {
  await sql({
    query: `
      UPDATE WORKING_PARTs
      SET
        name = ?,
        part = ?
      WHERE id = ?
    `,
    values: [data.name, data.part, id]
  });

  return await detail(id);
};

export const remove = async (id: string) => {
  await sql({
    query: 'DELETE FROM WORKING_PARTs WHERE id = ?',
    values: [id]
  });

  return true;
};

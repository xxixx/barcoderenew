import { sql } from '~~/server/db';

export const create = async (data: any) => {
  const result = await sql({
    query: 'INSERT INTO PD_DELIVERY (PD_NAME, COUNT) VALUES ( ?, ?)',
    values: [ data.PD_NAME, data.COUNT]
  });
  return result.insertId;
};

export const list = async () => {
  const result = await sql({
    query: `
      SELECT d.NO, d.ID, d.PD_NAME, d.COUNT, p.PUMMYUM,d.DATE
      FROM PD_DELIVERY d
      JOIN SALE_PRODUCT p ON d.PD_NAME = p.PUMMYUM
    `
  });
  return result;
};

export const remove = async (NO: string) => {
  const result = await sql({
    query: 'DELETE FROM PD_DELIVERY WHERE NO = ?',
    values: [NO]
  });
  return result.affectedRows > 0;
};

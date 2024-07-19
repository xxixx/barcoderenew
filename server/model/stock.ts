import { sql } from '~~/server/db';

export const create = async (data: any) => {
  const result = await sql({
    query: 'INSERT INTO PD_STOCK (PD_NAME, COUNT) VALUES ( ?, ?)',
    values: [ data.PD_NAME, data.COUNT]
  });
  return result.insertId;
};

export const list = async () => {
  const result = await sql({
    query: `
      SELECT s.NO, s.ID, s.PD_NAME, s.COUNT, DATE_FORMAT(s.DATE, '%Y-%m-%d') AS DATE, p.PUMMYUM
      FROM PD_STOCK s
      JOIN SALE_PRODUCT p ON s.PD_NAME = p.PUMMYUM
    `
  });
  return result;
};

export const remove = async (NO: string) => {
  const result = await sql({
    query: 'DELETE FROM PD_STOCK WHERE NO = ?',
    values: [NO]
  });
//   return result.affectedRows > 0;
return true;
};

import { sql } from '~~/server/db';

export const list = async () => {
  const result = await sql({
    query: 'SELECT PUMMYUM FROM SALE_PRODUCT'
  });
  return result;
};

import { sql } from '~~/server/db';

export const list = async () => {
  const result = await sql({
    query: 'SELECT * FROM PD_INVENTORY'
  });
  return result;
};

// <<<<<<<<<<<<<<  ✨ Codeium Command 🌟 >>>>>>>>>>>>>>>>
import { createPool } from 'mysql2/promise';

interface Options {
  query: string;
  values?: any[];
}

+console.log('Connecting to database...');
const pool = createPool({
  host: '118.128.165.171',
  user: 'erpadmin',
  // database: 'ERP_DB',
  database: 'ALKO_ERP',
  password: 'Elqldjemals@1',
  port: 13306
});
+console.log('Connected to database');

export const sql = async ({ query, values }: Options) => {
+  console.log(`Executing query: ${query}, with values: ${JSON.stringify(values)}`);
  const [rows] = await pool.query(query, values);
+  console.log(`Query executed, got ${rows.length} rows`);
  return rows;
};

export const transaction = async <T>(callback: (tx: any) => Promise<T>): Promise<T> => {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();
    const result = await callback(connection);
    await connection.commit();
    return result;
  } catch (err) {
    await connection.rollback();
    throw err;
  } finally {
    connection.release();
  }
};
// <<<<<<<  1d3538fd-c738-4f27-96db-4ba2dcfe4f00  >>>>>>>
// export const sql = async ({ query, values }: { query: string; values: any[] }) => {
//   const [results] = await pool.execute(query, values);
//   return results;
// };
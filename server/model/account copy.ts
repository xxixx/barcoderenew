import { sql } from '~~/server/db';
import { RowDataPacket } from 'mysql2/promise';

export const login = async (email: string, password: string) => {
  try {
    // 데이터베이스에서 입력된 이메일과 비밀번호가 일치하는 사용자를 조회합니다.
    const query = `
      SELECT *
      FROM ACCOUNT
      WHERE EMAIL = ? AND PASSWORD = ?
    `;
    const [rows] = await sql({ query, values: [email, password] }) as RowDataPacket[];

    // 조회 결과가 있으면 해당 사용자 정보를 반환합니다.
    if (rows && rows.length > 0) {
      return rows[0];
    } else {
      // 조회 결과가 없으면 null을 반환합니다.
      return null;
    }
  } catch (error) {
    // 데이터베이스 조회 중 에러가 발생하면 에러를 throw합니다.
    throw error;
  }
};

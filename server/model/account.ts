import { sql } from '~~/server/db';
import { RowDataPacket } from 'mysql2/promise';
export interface User extends RowDataPacket {
  NO: number;
  EMAIL: string;
  NAME: string;
  PASSWORD: string;
  CREATE_DATE: Date;
  ACCOUNT_STATE: number;
  LEVEL: number;
}
export const login = async (EMAIL: string, PASSWORD: string): Promise<User | null> => {
  try {
    // 데이터베이스에서 입력된 이메일과 비밀번호가 일치하는 사용자를 조회합니다.
    const query = `
      SELECT NO, EMAIL, NAME,ROLE,POSITION,  CREATE_DATE, ACCOUNT_STATE, LEVEL
      FROM ACCOUNT
      WHERE EMAIL = ? AND PASSWORD = ?
    `;
    const [rows] = await sql({ query, values: [EMAIL, PASSWORD] }) as RowDataPacket[];

    console.log("Query result:", rows); // 쿼리 결과 로그 출력

    // 조회 결과가 있으면 해당 사용자 정보를 반환합니다.
    if (rows) {
      console.log("Login success", rows);
      return rows;
    } else {
      // 조회 결과가 없으면 null을 반환합니다.
      console.log("Login fail");
      return null;
    }
  } catch (error) {
    // 데이터베이스 조회 중 에러가 발생하면 에러를 throw합니다.
    throw error;
  }
};
export const accountModel = {
  async getUserFromRefreshToken(refreshToken: string): Promise<User | null> {
    try {
      // 데이터베이스에서 refreshToken과 일치하는 사용자를 조회합니다.
      const query = `
        SELECT NO, EMAIL, NAME, PASSWORD, CREATE_DATE, ACCOUNT_STATE, LEVEL
        FROM ACCOUNT
        WHERE REFRESH_TOKEN = ?
      `;
      const [rows] = await sql({ query, values: [refreshToken] }) as RowDataPacket[];

      console.log("Query result:", rows); // 쿼리 결과 로그 출력

      // 조회 결과가 있으면 해당 사용자 정보를 반환합니다.
      if (rows) {
        console.log("User found for refreshToken:", rows);
        return rows;
      } else {
        // 조회 결과가 없으면 null을 반환합니다.
        console.log("User not found for refreshToken");
        return null;
      }
    } catch (error) {
      // 데이터베이스 조회 중 에러가 발생하면 에러를 throw합니다.
      throw error;
    }
  }
};
export function getUserFromRefreshToken(refreshToken: any) {
  throw new Error('Function not implemented.');
}


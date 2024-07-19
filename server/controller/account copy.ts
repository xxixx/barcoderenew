// controller/account.ts

import { H3Event, createError, readBody } from 'h3';
import * as accountModel from '~~/server/model/account';

export const login = async (evt: H3Event) => {
  try {
    const body = await readBody(evt);
    const { email, password } = body;

    console.log('Received login request:', { email, password });

    // 클라이언트에서 받은 이메일과 비밀번호를 사용하여 로그인을 시도합니다.
    const user = await accountModel.login(email, password);
    console.log('Login successful for user:', user); // 로그인 성공 로그
    if (!user) {
      // 사용자를 찾을 수 없는 경우 401 Unauthorized 에러를 반환합니다.
      console.log('Login failed for email:', email); // 로그인 실패 로그
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized'
      });
    }

    // 로그인이 성공하면 사용자 정보를 반환합니다.
    console.log('Login successful for email:', email); // 로그인 성공 로그
    return {
      data: user
    };
  } catch (error) {
    // 로그인 실패 시 500 Internal Server Error 에러를 반환합니다.
    console.error('Login error:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Login failed'
    });
  }
};

import { getUserByEmail } from '~/server/model/user';
import CryptoJS from 'crypto-js';
import cookieSession from 'cookie-session';

export default defineEventHandler(async (event) => {
  const body = await readBody<{ email: string; password: string }>(event);

  const { email, password } = body;

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email address and password are required',
    });
  }

  const userWithPassword = getUserByEmail(email);

  if (!userWithPassword) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Bad credentials',
    });
  }

  const verified = verifyPassword(password, userWithPassword.password);
  if (!verified) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Bad credentials',
    });
  }

  const { password: _password, ...userWithoutPassword } = userWithPassword;

	
const userDataString = JSON.stringify(userWithoutPassword);

// 암호화 키
const encryptionKey: any = process.env.ENCRYPTION_KEY;
// 데이터를 암호화합니다.
const encryptedData = CryptoJS.AES.encrypt(userDataString, encryptionKey).toString();
// 쿠키에 암호화된 데이터를 설정합니다.
setCookie(event, '__user', encryptedData, { maxAge: 60 * 1 });


 

  return {
    user: userWithoutPassword,
  };
});
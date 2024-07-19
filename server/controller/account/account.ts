import { H3Event, createError, readBody } from 'h3';
import * as accountModel from '~~/server/model/account';
import jwt from "jsonwebtoken";
// import { sign } from 'jsonwebtoken';
// import { sign } from 'jsonwebtoken';

// export const getUser = async (evt: H3Event) => {
//   try {
//     const token = evt.req.headers.cookie;
//     console.log("evt.req.headers.cookie token", token);
//     if (token) {
//       const tokenWithoutPrefix = token.replace("fineerpToken=", "");
//       const decodeduser = jwt.verify(
//         tokenWithoutPrefix,
//         process.env.SECRET_KEY as string
//       );

//       console.log("decodeduser ================= ", decodeduser);


//         evt.res.setHeader("Content-Type", "application/json");
//       evt.res.end(JSON.stringify(decodeduser));
//     } else {
//       console.error("토큰이 없습니다.");
//     }
//   } catch (error) {
//     console.error("토큰 해독 오류:", error);
//   }
// };

export const getUser = async (evt: H3Event) => {
  try {
    const token = evt.req.headers.cookie;
    console.log("evt.req.headers.cookie token", token);
    if (token) {
      const tokenWithoutPrefix = token.replace("fineerpToken=", "");
      
      try {
        const decodeduser = jwt.verify(tokenWithoutPrefix, process.env.SECRET_KEY as string);
        console.log("decodeduser ================= ", decodeduser);

        evt.res.setHeader("Content-Type", "application/json");
        evt.res.end(JSON.stringify(decodeduser));
      } catch (error) {
        console.error("토큰이 만료되었습니다.");
        
        // 토큰이 만료되었으므로 클라이언트에서 해당 토큰을 삭제하도록 응답에 포함시킵니다
        evt.res.setHeader("Set-Cookie", "fineerpToken=; Max-Age=0; Path=/");
        evt.res.statusCode = 401;
        evt.res.end();
      }
    } else {
      evt.res.setHeader("Set-Cookie", "fineerpToken=; Max-Age=0; Path=/");
      console.error("토큰이 없습니다.");
    }
  } catch (error) {
    console.error("토큰 해독 오류:", error);
  }
};
export const refreshToken = async (evt: H3Event) => {
  try {
    const token = evt.req.headers.cookie;
    console.log("evt.req.headers.cookie token ===========", token);
    if (token) {
      const tokenWithoutPrefix = token.replace("fineerpToken=", "");

      try {
        const decodeduser = jwt.verify(
          tokenWithoutPrefix,
          process.env.SECRET_KEY as string
        ) as { EMAIL: string; PASSWORD: string };
        console.log("refreshToken decodeduser ================= ", decodeduser);

        const EMAIL = decodeduser.EMAIL;
    console.log("decodeduser EMAIL ================= ", EMAIL);
        const PASSWORD = '1';
        const user = await accountModel.login(EMAIL, PASSWORD);
        console.log("decodeduserUser successful for user:", user); // 로그인 성공 로그
        // 새로운 access token 발급
        const newToken = jwt.sign(user, process.env.SECRET_KEY as string, {
          expiresIn: "1m",
        });
        console.log("New token generated:", newToken);

        // 쿠키에 새로운 토큰을 저장
        evt.res.setHeader("Set-Cookie", `fineerpToken=${newToken}; HttpOnly`);

        // 로그인이 성공하면 사용자 정보를 반환합니다.
        console.log("Login successful for EMAIL:", user);

        return {
          data: user,
        };
      } catch (error) {
        console.error("토큰이 만료되었습니다.");
   
        // 토큰이 만료되었을 때 적절한 처리를 추가
        // evt.res.setHeader("Set-Cookie", "fineerpToken=; Max-Age=0; Path=/");
        evt.res.statusCode = 401;
      }
    } else {
      evt.res.statusCode = 401;
      // evt.res.setHeader("Set-Cookie", "fineerpToken=; Max-Age=0; Path=/");
      console.error("토큰이 없습니다.");
    }
  } catch (error) {
    console.error("토큰 해독 오류:", error);
  }
};





export const login = async (evt: H3Event) => {
  try {
    const body = await readBody(evt);
    const { EMAIL,PASSWORD } = body;

    console.log('Received login request:', { EMAIL,PASSWORD });

    // 클라이언트에서 받은 이메일과 비밀번호를 사용하여 로그인을 시도합니다.
    const user = await accountModel.login(EMAIL,PASSWORD);
    console.log('Login successful for user:', user); // 로그인 성공 로그
    if (!user) {
      // 사용자를 찾을 수 없는 경우 401 Unauthorized 에러를 반환합니다.
      console.log('Login failed for EMAIL:', EMAIL); // 로그인 실패 로그
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized'
      });
    }
    // 로그인이 성공하면 토큰 생성
    const token = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: '24h' });
    console.log('Login successful for token:', token); // 로그인 성공 로그
    

    // 쿠키에 토큰을 저장
    evt.res.setHeader('Set-Cookie', `fineerpToken=${token}; HttpOnly`);

    // 로그인이 성공하면 사용자 정보를 반환합니다.
    console.log('Login successful for EMAIL:!!', EMAIL, PASSWORD); // 로그인 성공 로그
   
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
export const accesstoken = async (evt: H3Event) => {
  try {
    const body = await readBody(evt);
    const { token } = body;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    return {
      data: decoded
    };
  } catch (error) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    });
  }
};
// export const logout = async (evt: H3Event) => {
//   evt.res.setHeader('Set-Cookie', `fineerpToken=; HttpOnly`);
//   return {
//     data: 'logout'
//   };
// }
export const logout = async (evt: H3Event) => {
  try {
    // 쿠키를 삭제하는 로직 추가
    evt.node.res.setHeader("Set-Cookie", "jwtToken=; Max-Age=0; Path=/;"); // jwtToken 쿠키를 삭제

    // 성공적으로 로그아웃을 처리한 경우
    return { message: "로그아웃 성공" };
  } catch (error) {
    console.error(error);
    throw new Error("로그아웃 실패");
  }
};


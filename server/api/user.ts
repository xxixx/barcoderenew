import { useBase, createRouter, defineEventHandler } from 'h3';
import jwt from 'jsonwebtoken'; // JWT 모듈을 가져옵니다.
import * as userCtrl from '~~/server/controller/user';

const router = createRouter();

router.get('/user', defineEventHandler(async(evt) =>{
    try {
        const user = await userCtrl.user(evt); // 로그인 컨트롤러를 호출하여 사용자 정보를 가져옵니다.
    
        if (!user) {
          // 사용자 정보가 없는 경우 401 Unauthorized 에러를 반환합니다.
          throw new Error('Unauthorized');
        }
    
        // JWT를 생성합니다.
        const token = jwt.sign({ email: user.EMAIL }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
        // 쿠키에 JWT를 저장합니다.
        evt.res.setHeader('Set-Cookie', `token=${token}; HttpOnly`);
    
        // 사용자 정보를 응답으로 반환합니다.
        return {
          data: user
        };
      } catch (error) {
        // 오류가 발생한 경우 500 Internal Server Error 에러를 반환합니다.
        throw new Error('Internal Server Error');
      }
    }));
    
    export default useBase('/api/account', router.handler);
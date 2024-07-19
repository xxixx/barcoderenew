// controller/user.ts

import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const user = async (req: Request, res: Response) => {
  try {
    // 요청에서 쿠키를 가져옵니다.
    const token = req.cookies.token;

    if (!token) {
      // 토큰이 없으면 인증되지 않은 사용자로 처리합니다.
      return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
      // JWT를 해독하여 사용자 정보를 가져옵니다.
      const decoded = jwt.verify(token, process.env.SECRET_KEY as string) as { [key: string]: any };
      const user = decoded; // 요청 객체에 사용자 정보를 추가합니다.

      // 사용자 정보를 클라이언트에 반환합니다.
      res.json({ user });
    } catch (error) {
      // 토큰이 유효하지 않으면 오류를 반환합니다.
      return res.status(401).json({ message: 'Unauthorized' });
    }
  } catch (error) {
    // 오류가 발생하면 적절한 오류 메시지를 반환합니다.
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

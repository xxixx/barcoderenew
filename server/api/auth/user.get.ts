import { getUserFormEvent } from "~/server/utils/auth";

export default defineEventHandler((event) => {
  const user = getUserFormEvent(event)
  // const user = event.context.user; //미들웨어에서 정보를 가져오게 변경함(위의 것)
  const userJsonString = getCookie(event, '__user');

  // if (!userJsonString) {
  //   return { user: null };
  // }
  if (!user) {
      return { user: null };
    }

  // const user = JSON.parse(userJsonString);

  return {
    user,
  };
});
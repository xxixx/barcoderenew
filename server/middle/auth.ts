//모든 요청에 대해서 middle 가 우선 실행된다.
import { getUserFormEvent } from "../utils/auth"

export default defineEventHandler((event)=>{
  const user = getUserFormEvent(event)
  if(user){
    event.context.user = user;//event context user 에  user 추가
  }
})
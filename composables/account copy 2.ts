// account.ts

import { useCookies } from '@vueuse/integrations/useCookies'
import { useAccountStore } from '~/stores/account';
const accountStore = useAccountStore();


// import { useCookies } from "vue-cookies";

export const useAccount = () => {
  const user = ref(null);

  const getUser = async () => {
    try {
      const response = await fetch("/api/account/getUser");
      if (response.ok) {
        const userData = await response.json();
        console.log("사용자 정보:", userData);
        user.value = userData;
        accountStore.setUser(userData);
        // 여기서 userData를 이용하여 필요한 작업을 수행할 수 있습니다.
      } else {
        if (response.status === 401) {
          console.log("사용자 정보를 가져오는 데 실패했습니다.", response.status);
          const { remove } = useCookies();
          remove('fineerpToken');
          console.log("로그아웃 성공");
          console.error("토큰이 만료되어 삭제되었습니다.");
        } else {
          console.error("사용자 정보를 가져오는데 실패했습니다.");
        }
      }
    } catch (error) {
      console.error("사용자 정보를 가져오는 도중 오류 발생:", error);
    }
  };

  return {
    user,
    getUser
  };
};

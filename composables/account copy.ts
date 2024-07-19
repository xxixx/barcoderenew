// account.ts
import { ref } from "@vue/composition-api";

export const useAccount = () => {
  const user = ref(null);

  const getUser = async () => {
    try {
      const response = await fetch("/api/account/getUser");
      if (response.ok) {
        const userData = await response.json();
        console.log("사용자 정보:", userData);
        user.value = userData;
        // 여기서 userData를 이용하여 필요한 작업을 수행할 수 있습니다.
      } else {
        console.error("사용자 정보를 가져오는데 실패했습니다.");
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

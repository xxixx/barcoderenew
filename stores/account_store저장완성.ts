import { defineStore } from 'pinia';


export const useAccountStore = defineStore('account', {
    state: () => ({
        user: null as { NAME: string } | null,
        email: null as { EMAIL: string } | null,
        lastLoginTime: null as number | null,
      }),
      actions: {
        setUser(user: { NAME: string }) {
          this.user = user;
        },
        setUserByEmail(email: { EMAIL: string }) {
          this.email = email;
        },
        clearUser() {
          this.user = null;
          this.lastLoginTime = null; // 사용자 데이터가 삭제되었으므로 로그인 시간도 null로 초기화
        },
        checkSessionTimeout() {
            const currentTime = Date.now();
            if (this.lastLoginTime && currentTime - this.lastLoginTime > 60 * 60 * 1000) {
              // 로그인 후 60분이 경과했으므로 사용자 데이터를 삭제합니다.
              this.clearUser();
            }
          },
      
      },
      persist: true, // 상태를 로컬 스토리지에 저장
    });
// 애플리케이션의 모든 라우터 네비게이션 이벤트를 감지하여 세션 타임아웃을 확인합니다.
// 이 코드는 Nuxt.js에서 사용하는 경우 미들웨어로 등록할 수 있습니다.
// Nuxt.js가 아닌 경우 애플리케이션의 전역 네비게이션 가드 또는 라우터 이벤트를 활용할 수 있습니다.

// import { getUser } from '~/composables/auth/usersData';//local data 사용시
import type { UserWithoutPassword } from '~/types/user';

export const useAuthStore = defineStore('auth', () => {
  const authUser = ref<Maybe<UserWithoutPassword>>();
  const nickName = ref();

  const signIn = async (email: string, password: string) => {
   const data =await $fetch<{user: UserWithoutPassword}>('/api/auth/login', {
      method:'post',
      body:{
        email,
        password,
      },
    });
    // const foundUser = getUser(email, password); //local data 사용코드
    const {user: foundUser}  = data

    if (!foundUser) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Invalid email or password',
      });
    }
    setUser(foundUser);
  };

  const signOut = () => {
    $fetch('/api/auth/logout', {
      method: 'post',

    })
    setUser(null);
    // deleteCookie('__user'); // 쿠키 삭제
   
  };

  const setUser = (user: Maybe<UserWithoutPassword>) => {
    authUser.value = user;
    nickName.value =authUser.value?.id.split('')[0] 
  };
  const fetchUser = async () => {
    const data = await $fetch<{ user: UserWithoutPassword }>('/api/auth/user', {
      headers: useRequestHeaders(['cookie']),
    });
    setUser(data.user);
  };

 
  return {
    user: authUser,
    nickName,
    isAuthenticated: computed(() => !!authUser.value),
    isAdmin: computed(() =>
      !authUser.value ? false : authUser.value.roles.includes('ADMIN'),
    ),
    signIn,
    signOut,
    fetchUser
  };  
},
 {
  // persist: true,
  // persist: {
  //   storage: persistedState.localStorage,
  // }
},
);
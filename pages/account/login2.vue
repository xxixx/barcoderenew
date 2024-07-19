```html
<template>
  <div class="container d-flex justify-content-center">
    <div class="login">
      <form @submit.prevent="handleLoginSubmit" style="min-width: 500px">
        <img
          class="mb-4"
          src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
          alt=""
          width="172"
          height="157"
        />
        account: {{ accountStore.user ? accountStore.user.NAME : "" }}/
        {{ accountStore.user ? accountStore.user.EMAIL : "" }}

        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        <div class="form-floating my-1">
          <input
            type="email"
            class="form-control"
            v-model="form.EMAIL"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            v-model="form.PASSWORD"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <button class="btn btn-primary w-100 py-2" type="submit">
          Sign in
        </button>
      </form>
      <button @click="getUser" class="btn btn-primary w-100 py-2" type="submit">
        GetUser
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAccountStore } from "~/stores/account";
import Cookies from "js-cookie";
// import jwt from 'jsonwebtoken';
// import jwt_decode from 'jwt-decode';

const account = ref(null);
const form = ref({ EMAIL: "", PASSWORD: "" });
const router = useRouter();
const accountStore = useAccountStore();

const handleLoginSubmit = async () => {
  try {
    const response = await fetch("/api/account/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form.value),
    });
    const responseData = await response.json();
    console.log("data", responseData.data);
    // const token = Cookies.get('fineerpToken');
    // console.log('token', token);
    // const decodedToken = jwt_decode(token);
    // const decodedToken = jwt.decode(token,process.env.SECRET_KEY);
    // console.log(decodedToken);
    if (response.ok) {
      console.log("login success");
      accountStore.setUser(responseData.data);
      //   const token = Cookies.get('fineerpToken');
      // console.log('token', token);
      // const decodedToken = jwt_decode(token);
      // const decodedToken = jwt.verify(token);
      // console.log(decodedToken);

      // if (responseData.data === undefined) {
      //   console.log("user not found.");
      //   // const user = { EMAIL: decodedToken.email };
      //   account.value = null;
      //   accountStore.setUser('');
      //   router.push("/");
      // } else {
      //   alert("Failed to decode token.");
      // }
    } else {
      alert("Login failed");
    }
  } catch (error) {
    console.error("Login error:", error);
    accountStore.setUser("");
  }
};
// const getUser = async () => {
//   try {
//     const response = await fetch("/api/account/getUser");
//     if (response.ok) {
//       const responseData = await response.text();
//       const userData = responseData ? JSON.parse(responseData) : null;
//       console.log("사용자 정보:", userData);
//       accountStore.setUser(userData);
//       // 여기서 userData를 이용하여 필요한 작업을 수행할 수 있습니다.
//     } else {
//       console.error("사용자 정보를 가져오는데 실패했습니다.");
//     }
//   } catch (error) {
//     console.error("사용자 정보를 가져오는 도중 오류 발생:", error);
//   }
// };
onMounted(() => {
  // getUser()
  // if (token) {
  //   const decodedToken = jwt_decode(token);
  //   if (decodedToken) {
  //     account.value = { EMAIL: decodedToken.email };
  //   }
  // }
});
</script>
```

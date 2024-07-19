<template>
  <div>
    <div class="flex flex-center">
      <!-- <FormLogin style="width: 400px" @success="handleLoginSuccess" /> -->
      <FormLogin style="width: 400px" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  // middleware: ['guest-only'],
});
const handleLoginSuccess = async () => {
  // const { isAdmin } = useAuthUser();
  // const isAdmin = useAdmin();
  const { isAdmin } = storeToRefs(useAuthStore());

  const redirect = isAdmin.value ? "/admin" : "/";
  await navigateTo(redirect);
};
</script>

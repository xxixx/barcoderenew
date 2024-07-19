<template>
  <div>
    <div class="flex flex-center">
      <!-- <FormLogin style="width: 400px" @success="handleLoginSuccess" /> -->
      <LoginForm />
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginForm from "~/components/Form/LoginForm.vue";
</script>

<template>
  <div class="w-full max-w-3xl mx-auto py-8">
    <div class="text-xl font-semibold">Poduct Page</div>
    <div class="relative flex justify-end mb-7">
      <NuxtLink to="/products/create" class="btn btn-primary">
        Add Post
      </NuxtLink>
    </div>

    <div
      v-for="product in data"
      class="relative w-full border rounded-lg p-5 mb-6"
      :key="product.id"
    >
      <div class="text-lg font-semibold mb-3">{{ product.part }}</div>
      <p>{{ product.name }}</p>

      <div class="relative flex justify-end pt-3">
        <button @click="() => onDelete(product.id)" class="btn btn-danger">
          Delete
        </button>
        <NuxtLink :to="'/products/' + product.id" class="btn btn-danger">
          Edit
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductModel } from "~~/server/model/product";
useHead({
  title: "Product Page",
});

const data = ref<ProductModel[]>([]);

// <<<<<<<<<<<<<<  ✨ Codeium Command 🌟 >>>>>>>>>>>>>>>>
const fetchData = async () => {
  try {
    console.log("Fetching products data...");
    const result = await $fetch("/api/products");
    console.log("Products data fetched successfully:", result.data);
    data.value = result.data as ProductModel[];
  } catch (error) {
    console.error("Error while fetching products data:", error);
  }
  // catch {
  //     alert('Fetch error');
  //   }
};

// <<<<<<<  c594098a-8fb7-4417-846a-961158364cc5  >>>>>>>

const onDelete = async (id: number) => {
  try {
    await $fetch("/api/products/" + id, {
      method: "DELETE",
    });

    await fetchData();
  } catch {
    alert("Delete error");
  }
};

onMounted(fetchData);
</script>

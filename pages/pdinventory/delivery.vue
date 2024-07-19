<template>
  <div>
    <h1>출하 등록</h1>
    <form @submit.prevent="onSubmit">
      <div>
        <!-- <label for="id">ID</label>
        <input type="number" v-model="form.ID" required /> -->
      </div>
      <div>
        <label for="pd_name">제품명</label>
        <select v-model="form.PD_NAME" required>
          <option
            v-for="product in products"
            :key="product.PUMMYUM"
            :value="product.PUMMYUM"
          >
            {{ product.PUMMYUM }}
          </option>
        </select>
      </div>
      <div>
        <label for="count">수량</label>
        <input type="number" v-model="form.COUNT" required />
      </div>
      <button type="submit">출하 등록</button>
    </form>
    {{ deliveries }}
    <h2>출하 목록</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>날짜</th>
          <th>제품명</th>
          <th>수량</th>
          <th>작업</th>
          <!-- 새로운 작업 열 추가 -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="delivery in deliveries" :key="delivery.NO">
          <td>{{ delivery.NO }}</td>
          <td>{{ delivery.DATE }}</td>
          <td>{{ delivery.PD_NAME }}</td>
          <td>{{ delivery.COUNT }}</td>
          <td>
            <button @click="onDelete(delivery.NO)">삭제</button>
            <!-- 삭제 버튼 추가 -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const form = ref({
  PD_NAME: "",
  COUNT: "",
});

const products = ref([]);
const deliveries = ref([]);

const fetchProducts = async () => {
  try {
    const response = await $fetch("/api/saleproduct");
    products.value = response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    alert("제품 정보를 가져오는 데 실패했습니다.");
  }
};

const fetchDeliveries = async () => {
  try {
    const response = await $fetch("/api/delivery");
    deliveries.value = response.data;
  } catch (error) {
    console.error("Error fetching deliveries:", error);
    alert("출하 목록을 가져오는 중 오류가 발생했습니다.");
  }
};

const onSubmit = async () => {
  try {
    await $fetch("/api/delivery", {
      method: "POST",
      body: form.value,
    });
    alert("출하 등록이 완료되었습니다.");
    form.value = { ID: "", PD_NAME: "", COUNT: "" };
    fetchDeliveries(); // 등록 후 출하 목록 갱신
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("출하 등록 중 오류가 발생했습니다.");
  }
};

const onDelete = async (NO) => {
  try {
    await $fetch(`/api/delivery/${NO}`, {
      method: "DELETE",
    });
    alert("출하 데이터가 삭제되었습니다.");
    fetchDeliveries(); // 삭제 후 출하 목록 갱신
  } catch (error) {
    console.error("Error deleting delivery:", error);
    alert("출하 데이터 삭제 중 오류가 발생했습니다.");
  }
};

onMounted(() => {
  fetchProducts();
  fetchDeliveries();
});
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 300px;
}

div {
  margin-bottom: 10px;
}

label {
  margin-bottom: 5px;
}

input,
select {
  padding: 8px;
  font-size: 16px;
}

button {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}

th {
  background-color: #f9f9f9;
}
</style>

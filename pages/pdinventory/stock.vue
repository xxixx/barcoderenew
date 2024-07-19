<template>
  <div>
    <h1>재고 등록</h1>
    {{ stocks }}
    <form @submit.prevent="submitForm">
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
      <button type="submit">등록</button>
    </form>
    <h2>재고 목록</h2>
    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>날짜</th>
          <th>제품명</th>
          <th>수량</th>
          <th>작업</th>
          <!-- 작업 열 추가 -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="stock in stocks" :key="stock.NO">
          <td>{{ stock.NO }}</td>
          <td>{{ stock.DATE }}</td>
          <td>{{ stock.PD_NAME }}</td>
          <td>{{ stock.COUNT }}</td>
          <td><button @click="deleteStock(stock.NO)">삭제</button></td>
          <!-- 삭제 버튼 추가 -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const form = ref({
  ID: "",
  PD_NAME: "",
  COUNT: "",
});

const products = ref([]);
const stocks = ref([]);

const fetchProducts = async () => {
  try {
    const response = await $fetch("/api/saleproduct");
    products.value = response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    alert("제품 정보를 가져오는 데 실패했습니다.");
  }
};

const fetchStocks = async () => {
  try {
    const response = await $fetch("/api/stock");
    stocks.value = response.data;
  } catch (error) {
    console.error("Error fetching stocks:", error);
    alert("재고 정보를 가져오는 데 실패했습니다.");
  }
};

const submitForm = async () => {
  try {
    await $fetch("/api/stock", {
      method: "POST",
      body: form.value,
    });
    alert("재고가 등록되었습니다.");
    fetchStocks();
  } catch (error) {
    console.error("Error:", error);
    alert("재고 등록에 실패했습니다.");
  }
};

const deleteStock = async (NO) => {
  try {
    await $fetch(`/api/stock/${NO}`, {
      method: "DELETE",
    });
    alert("재고가 삭제되었습니다.");
    await fetchStocks(); // 재고 삭제 후에 재고 목록을 다시 가져옴
  } catch (error) {
    console.error("Error:", error);
    alert("재고 삭제에 실패했습니다.");
  }
};

onMounted(() => {
  fetchProducts();
  fetchStocks();
});
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
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
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  padding: 10px;
  border: 1px solid #ddd;
}

th {
  background-color: #f4f4f4;
}

td button {
  padding: 5px 10px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

td button:hover {
  background-color: #cc0000;
}
</style>

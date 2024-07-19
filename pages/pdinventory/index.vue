<template>
  <div>
    <h1>재고 현황</h1>
    <BarChart
      :subCategoryAllName="inventoryNames"
      :subCategoryAllCount="inventoryCounts"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import BarChart from "~/components/BarCharts.vue"; // BarChart 컴포넌트를 가져옴

const inventoryNames = ref([]); // 재고 이름 배열
const inventoryCounts = ref([]); // 재고 개수 배열

// 재고 데이터를 가져오는 함수
const fetchInventoryData = async () => {
  try {
    // 서버 API를 통해 재고 데이터를 가져옴
    const response = await $fetch("/api/inventory");
    const inventoryData = response.data;

    // 재고 데이터를 이름과 개수로 분리하여 배열에 저장
    inventoryData.forEach((item) => {
      inventoryNames.value.push(item.PD_NAME);
      inventoryCounts.value.push(item.COUNT);
    });
  } catch (error) {
    console.error("Error fetching inventory data:", error);
    alert("재고 데이터를 가져오는 데 실패했습니다.");
  }
};

onMounted(() => {
  fetchInventoryData(); // 페이지가 마운트되면 재고 데이터를 가져옴
});
</script>

<style scoped>
/* 필요한 스타일을 추가하세요 */
</style>

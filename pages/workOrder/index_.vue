<template>
  <div class="w-full max-w-3xl mx-auto py-8">
    <!-- Date Range Picker -->
    <input type="date" v-model="startDate" />
    <!-- 시작 날짜 선택 -->
    <input type="date" v-model="endDate" />
    <!-- 종료 날짜 선택 -->
    <button @click="fetchDataByDateRange">조회</button>
    <!-- 조회 버튼 -->

    <div v-if="isLoading">
      <!-- Show loading indicator -->
      <p>Loading...</p>
    </div>
    <div v-else class="container chart_container">
      <div class="table-responsive">
        <table class="table table-sm">
          <!-- Table Header -->
          <thead>
            <tr>
              <th>번호</th>
              <th>날짜</th>
              <th>제품명</th>
              <th>수량</th>
              <th>등록자</th>
              <th class="d-none d-md-table-cell">상태</th>
              <th class="d-none d-md-table-cell">CREATE DATE</th>
              <th>
                <div
                  class="btn btn-sm btn-success sm-btn"
                  @click="exportToExcel"
                >
                  To EXCEL
                </div>
              </th>
            </tr>
          </thead>

          <!-- Table Body -->
          <tbody>
            <tr v-for="(item, index) in filteredData" :key="index">
              <td>{{ item.NO }}</td>
              <td>{{ formatDateToMonthDay(item.CREATE_DATE) }}</td>

              <td>{{ item.PRODUCT }}</td>
              <td>{{ item.COUNT }}</td>
              <td class="d-none d-md-table-cell">{{ item.REG_ACCOUNT }}</td>
              <td class="d-none d-md-table-cell">{{ item.STATE }}</td>
              <td class="d-none d-md-table-cell">{{ item.STATE }}</td>
              <td>
                <div class="btn btn-sm btn-danger" @click="onDelete(item.no)">
                  DEL
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";
import type { WorkOrderModel } from "~~/server/model/workOrder";
import { formatDateToMonthDay } from "~~/utils/formatDatetoMonth";

const startDate = ref("");
const endDate = ref("");
const Data = ref<WorkOrderModel[]>([]);
const filteredData = ref<WorkOrderModel[]>([]);
const isLoading = ref(true);

const fetchData = async () => {
  try {
    const result = await $fetch("/api/workOrder/getRecord");
    Data.value = result.data as WorkOrderModel[];
    filteredData.value = Data.value; // Initially show all data
    isLoading.value = false;
  } catch {
    alert("Fetch error");
  }
};

const fetchDataByDateRange = () => {
  filteredData.value = Data.value.filter((item) => {
    const itemDate = new Date(item.CREATE_DATE);
    const start = new Date(startDate.value);
    const end = new Date(endDate.value);
    return itemDate >= start && itemDate <= end;
  });
};

const exportToExcel = () => {
  // Function to export data to Excel
};

const onDelete = (no: number) => {
  // Function to delete item
};

onMounted(fetchData);
</script>

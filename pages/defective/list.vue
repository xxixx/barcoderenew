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
              <th>DATE</th>
              <th>PART</th>
              <th>CATEGORY</th>
              <th>SUB_CATEGORY</th>
              <th>COUNT</th>
              <th class="d-none d-md-table-cell">ETC</th>
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
              <td>{{ formatDateToMonthDay(item.DATE) }}</td>
              <td>{{ item.PART }}</td>
              <td>{{ item.CATEGORY }}</td>
              <td>{{ item.SUB_CATEGORY }}</td>
              <td>{{ item.COUNT }}</td>
              <td class="d-none d-md-table-cell">{{ item.ETC }}</td>
              <td class="d-none d-md-table-cell">
                {{ formatDate(item.CREATED_DATE) }}
              </td>
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
import type { DefectiveModel } from "~~/server/model/defective";
import { formatDateToMonthDay } from "~~/utils/formatDatetoMonth";

const startDate = ref("");
const endDate = ref("");
const Data = ref<DefectiveModel[]>([]);
const filteredData = ref<DefectiveModel[]>([]);
const isLoading = ref(true);

const fetchData = async () => {
  try {
    const result = await $fetch("/api/defective/getAllData");
    Data.value = result.data as DefectiveModel[];
    filteredData.value = Data.value; // Initially show all data
    isLoading.value = false;
  } catch {
    alert("Fetch error");
  }
};

const fetchDataByDateRange = () => {
  filteredData.value = Data.value.filter((item) => {
    const itemDate = new Date(item.DATE);
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

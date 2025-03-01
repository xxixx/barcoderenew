<template>
  <div class="w-full">
    <div v-if="isLoading">
      <!-- Show loading indicator -->
      <p>Loading...</p>
    </div>
    <div v-else class="container chart_container">
      <!-- <BarCharts v-if="chartData_Count.length > 0 && chartData_Date.length > 0" :chartData_Count="chartData_Count" :chartData_Date="chartData_Date" /> -->
    </div>

    <div class="album py-5 bg-body-tertiary">
      <div class="container">
        <div class="row g-3">
          <div class="bg-orange">
            <p class="text-center font-weight-bold display-6 border-bottom">
              DAY COUNT VIEW
            </p>
          </div>
          <div class="">
            <div class="card shadow-sm">
              <LineCharts
                v-if="chartData_Count.length > 0 && chartData_Date.length > 0"
                :chartData_Count="chartData_Count"
                :chartData_Date="chartData_Date"
              />
            </div>
            <!--  -->
            <div></div>
            <div class="bg-orange">
              <p class="text-center font-weight-bold display-6 border-bottom">
                PARTS DEFECTIVE RATE
              </p>
            </div>
            <!--  -->
            <div class="">
              <div class="row mt-2">
                <div class="col-12 col-md-6">
                  <PieCharts
                    v-if="chartData_Part.length > 0"
                    :chartPart_Count="chartPart_Count"
                    :chartPart_Name="chartPart_Name"
                  />
                </div>
                <div class="col-12 col-md-6">
                  <div class="card pt-3 px-4">
                    <p
                      class="text-center text-bold bg-danger text-white mb-0 p-1"
                    >
                      Last Defective Data 10
                    </p>
                    <hr class="my-2" />
                    <div class="table-responsive">
                      <table
                        class="table table-sm table-hover table-striped-columns"
                        id="custom-table"
                      >
                        <thead>
                          <tr>
                            <th class="text-center">DATE</th>
                            <th class="text-center">PART</th>
                            <th class="text-center" v-if="isSmallScreen">
                              CAT
                            </th>
                            <th class="text-center" v-else>CATEGORY</th>
                            <!-- Display "SUB_CAT" instead of "SUB_CATEGORY" for small screens -->
                            <th class="text-center" v-if="isSmallScreen">
                              SUB_CAT
                            </th>
                            <th class="text-center" v-else>SUB_CATEGORY</th>
                            <th class="text-center">COUNT</th>

                            <!-- <th>DATE</th> -->
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="(item, index) in lastDefectiveData"
                            :key="index"
                          >
                            <td class="text-center">
                              {{ formatDateToMonthDay(item.DATE) }}
                            </td>
                            <td class="text-center">{{ item.PART }}</td>
                            <td class="text-center">{{ item.CATEGORY }}</td>
                            <td class="text-center">{{ item.SUB_CATEGORY }}</td>
                            <td class="text-center">{{ item.COUNT }}</td>

                            <!-- <td>{{ formatDate(item.CREATED_DATE) }}</td> -->
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--  -->

            <div class="card mt-2">
              <div class="bg-orange">
                <p class="text-center font-weight-bold display-6 border-bottom">
                  CATEGORY DEFECTIVE RATE
                </p>
              </div>
              <div class="barChart" style="height: 300px">
                <BarCharts
                  v-if="
                    subCategoryAllCount.length > 0 &&
                    subCategoryAllCount.length > 0
                  "
                  :subCategoryAllName="subCategoryAllName"
                  :subCategoryAllCount="subCategoryAllCount"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LineCharts from "~/components/LineCharts.vue";
import BarCharts from "~/components/BarCharts.vue";
import PieCharts from "~/components/PieCharts.vue";
import type {
  DefectiveModel,
  DefectiveCategoryModel,
} from "~~/server/model/defective";
import { formatDateToMonthDay } from "~~/utils/formatDatetoMonth";
useHead({
  title: "List Page",
});
//
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();

// Define a computed property to check if the screen size is small
const isSmallScreen = computed(() => {
  return width.value <= 576; // Adjust the breakpoint as needed
});
//
const data = ref<DefectiveModel[]>([]);
const chartData_Count = ref<number[]>([]);
const chartData_Date = ref<string[]>([]);
const isLoading = ref(true);

const chartData_Part = ref<DefectiveCategoryModel[]>([]);
const partData = ref<DefectiveCategoryModel[]>([]);
const chartPart_Count = ref<number[]>([]);
const chartPart_Name = ref<string[]>([]);

//
const subCategoryAllData = ref<DefectiveCategoryModel[]>([]);
const subCategoryAllName = ref<string[]>([]);
const subCategoryAllCount = ref<number[]>([]);
// Last data
const lastDefectiveData = ref<DefectiveModel[]>([]);

const fetchData = async () => {
  try {
    const result = await $fetch("/api/defective");
    data.value = result.data as DefectiveModel[];
    const totalCounts = data.value
      ? data.value.map((item) => Number(item.total_count))
      : [];
    chartData_Count.value = totalCounts;
    const Dates = data.value
      ? data.value.map((item) => formatDateToMonthDay(item.DATE))
      : [];
    chartData_Date.value = Dates;
    // part count 가져오기
    const partData = await $fetch("/api/defective/getpartCount");
    chartData_Part.value = partData.data as DefectiveCategoryModel[];
    const partsCounts = data.value
      ? chartData_Part.value.map((item) => Number(item.part_count))
      : [];
    chartPart_Count.value = partsCounts;
    const partsName = data.value
      ? chartData_Part.value.map((item) => String(item.CATEGORY))
      : [];
    chartPart_Name.value = partsName;
    // defective/categoryAll
    const result2 = await $fetch("/api/defective/categoryAll");
    subCategoryAllData.value = result2.data as DefectiveCategoryModel[];
    const subCategoryAll = subCategoryAllData.value
      ? subCategoryAllData.value.map((item) => String(item.SUB_CATEGORY))
      : [];
    subCategoryAllName.value = subCategoryAll;
    const subCategoryAllCounts = subCategoryAllData.value
      ? subCategoryAllData.value.map((item) => Number(item.categoryAll_count))
      : [];
    subCategoryAllCount.value = subCategoryAllCounts;
    // Last data
    const lastData = await $fetch("/api/defective/getLastData");
    lastDefectiveData.value = lastData.data
      ? (lastData.data as DefectiveModel[])
      : [];

    isLoading.value = false; // Set loading state to false when data is fetched
  } catch {
    alert("Fetch error");
  }
};

onMounted(fetchData);
</script>
<style scoped>
.chart_container {
}
.barChart {
  height: 300px;
}
#custom-table {
  font-size: 0.7rem; /* Adjust the font size as needed */
}

@media (min-width: 1200px) {
  /* Adjust the breakpoint as per your requirement for sm size */
  #custom-table {
    font-size: 1rem; /* Adjust the font size as needed */
  }
}
.card {
  width: 98%;
}
</style>

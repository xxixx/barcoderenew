<template>
  <div class="w-full max-w-3xl mx-auto py-8">
    <h5 class="text-center mt-2">INSERT</h5>
    <hr />
    <div v-if="isLoading">
      <!-- Show loading indicator -->
      <p>Loading...</p>
    </div>
    <div v-else class="container chart_container">
      <!-- <BarCharts v-if="chartData_Count.length > 0 && chartData_Date.length > 0" :chartData_Count="chartData_Count" :chartData_Date="chartData_Date" /> -->
    </div>

    <div class="album py-5 bg-body-tertiary">
      <div class="container"></div>
    </div>
    <div class="container">
      <form class="d-flex justify-content-center flex-wrap">
        <div class="d-flex">
          <div class="col">
            <label for="validationDefault01">DATE</label>
            <input
              v-model="form.DATE"
              type="date"
              class="form-control border border-success"
              id="validationDefault01"
              placeholder="DATE"
              required
            />
          </div>
          <!-- <div class="col mb-3 ">
            <label class="" for="validationDefault02">PART</label>  
            <input v-model="form.PART" type="text" class="form-control border border-success" id="validationDefault02" placeholder="PART"  required>
          </div> -->

          <div class="col mb-3">
            <label for="validationDefault02">PART</label>
            <select
              v-model="form.PART"
              class="form-control border border-success"
              id="validationDefault02"
              required
            >
              <option disabled value="">PART를 선택해주세요</option>
              <option v-for="part in PART" :key="part.PART" :value="part.PART">
                {{ part.PART }}
              </option>
            </select>
          </div>

          <!-- <div class="col">
            <label for="validationDefaultUsername">CATEGORY</label>
            <div class="input-group">
              
              <input v-model="form.CATEGORY" type="text" class="form-control border border-success" id="validationDefaultUsername" placeholder="CATEGORY" aria-describedby="inputGroupPrepend2" required>
            </div>
          </div> -->
          <div class="col">
            <label for="validationDefaultUsername">CATEGORY</label>
            <select
              v-model="form.CATEGORY"
              class="form-control border border-success"
              id="validationDefault02"
              required
            >
              <option disabled value="">CATEGORY를 선택해주세요</option>
              <option
                v-for="category in CATEGORY"
                :key="category.CATEGORY"
                :value="category.CATEGORY"
              >
                {{ category.CATEGORY }}
              </option>
            </select>
          </div>
          <!--  -->
        </div>
        <div class="d-flex">
          <!-- <div class="col">
            <label for="validationDefault03"> SUB CATEGORY</label>
            <input v-model="form.SUB_CATEGORY" type="text" class="form-control border border-success" id="validationDefault03" placeholder="SUB CATEGORY" required>
          </div> -->

          <!-- <div class="col">
            <label for="validationDefault03"> SUB CATEGORY</label>
            <select v-model="form.SUB_CATEGORY" class="form-control border border-success" id="validationDefault02" required>
              <option disabled value="">SUB CATEGORY를 선택해주세요</option>
              <option v-for="sub_category in SUB_CATEGORY" :key="sub_category.SUB_CATEGORY" :value="sub_category.SUB_CATEGORY">{{ sub_category.SUB_CATEGORY }}</option>
            </select>
          </div> -->
          <div class="col">
            <label for="subCategorySelect">SUB CATEGORY</label>
            <select
              v-model="form.SUB_CATEGORY"
              class="form-control border border-success"
              id="subCategorySelect"
              required
            >
              <option disabled value="">SUB CATEGORY를 선택해주세요</option>
              <option
                v-for="subCategory in filteredSubCategories"
                :key="subCategory.SUB_CATEGORY"
                :value="subCategory.SUB_CATEGORY"
              >
                {{ subCategory.SUB_CATEGORY }}
              </option>
            </select>
          </div>

          <!-- <div class="col">
            <label for="validationDefault05">COUNT</label>
            <input v-model="form.COUNT" type="text" class="form-control border border-success" id="validationDefault05" placeholder="COUNT" required>
          </div> -->
          <div class="col">
            <label for="validationDefault05">COUNT</label>
            <!-- <input v-model="form.COUNT" type="text" class="form-control border border-success" id="validationDefault05" placeholder="COUNT" required> -->
            <input
              v-model.number="form.COUNT"
              type="number"
              class="form-control border border-success"
              id="validationDefault05"
              placeholder="COUNT"
              min="1"
              max="15"
              required
            />
          </div>
          <div class="col">
            <label for="validationDefault04">ETC</label>
            <input
              v-model="form.ETC"
              type="text"
              class="form-control border border-success"
              id="validationDefault04"
              placeholder="ETC"
              required
            />
          </div>
        </div>
      </form>
      <div class="d-flex mt-1 w-100 justify-content-center">
        <button
          @click="insertData"
          class="btn btn-warning btn-sm w-50 text-white"
          type="submit"
        >
          INSERT
        </button>
      </div>
    </div>

    <hr />
    <div iv class="container">
      <div class="table-responsive">
        <table class="table table-sm text-center">
          <thead>
            <tr>
              <!-- <th>DATE</th> -->
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
                  <svg
                    width="24px"
                    height="14px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="white" d="M0 0h24v24H0z" />
                      <path
                        d="M2.859 2.877l12.57-1.795a.5.5 0 0 1 .571.495v20.846a.5.5 0 0 1-.57.495L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99zM4 4.735v14.53l10 1.429V3.306L4 4.735zM17 19h3V5h-3V3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4v-2zm-6.8-7l2.8 4h-2.4L9 13.714 7.4 16H5l2.8-4L5 8h2.4L9 10.286 10.6 8H13l-2.8 4z"
                      />
                    </g>
                  </svg>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <!-- {{ getInsertData }} -->
            <tr v-for="(item, index) in getInsertData" :key="index">
              <!-- <td>{{item.no }}</td> -->
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

    <hr />

    <hr />
  </div>
</template>

<script setup lang="ts">
import BarCharts from "~/components/BarCharts.vue";
import type {
  DefectiveModel,
  DefectiveCategoryModel,
} from "~~/server/model/defective";
import { formatDateToMonthDay } from "~~/utils/formatDatetoMonth";
import * as XLSX from "xlsx";
useHead({
  title: "List Page",
});
interface DefectiveCategory {
  PART: string;
  DESCRIPTIONS: string;
  CATEGORY: string;
  SUB_CATEGORY: string;
  PATERNER: string;
  PARENT_CAT: string;
  filter: string;
}
const form = reactive({
  DATE: "",
  PART: "",
  CATEGORY: "",
  SUB_CATEGORY: "",
  COUNT: "",
  SUM: "0",
  ETC: "",
});
const getInsertData = ref<DefectiveModel[]>([]);
const PART = ref<DefectiveCategoryModel[]>([]);
const CATEGORY = ref<DefectiveCategoryModel[]>([]);
// const SUB_CATEGORY = ref<DefectiveCategoryModel[]>([]);
const SUB_CATEGORY: Ref<DefectiveCategory[]> = ref([]);
const selectedCategory = ref<DefectiveCategoryModel[]>([]);
const selectedSubCategory = ref<DefectiveCategoryModel[]>([]);
// let filteredSubCategories = ref<DefectiveCategoryModel[]>([]);

const isLoading = ref(true);

const fetchData = async () => {
  try {
    const result = await $fetch("/api/defective/getInsertData");

    getInsertData.value = result.data as DefectiveModel[];
    // CATEGORY
    const part = await $fetch("/api/defective/getPart");
    PART.value = part.data as DefectiveCategoryModel[];
    const category = await $fetch("/api/defective/getCategory");
    CATEGORY.value = category.data as DefectiveCategoryModel[];
    const subcategory = await $fetch("/api/defective/getSubCategory");
    SUB_CATEGORY.value = subcategory.data as DefectiveCategoryModel[];

    isLoading.value = false; // Set loading state to false when data is fetched
  } catch {
    alert("Fetch error");
  }
};
const getCategory = async () => {
  try {
    const result = await $fetch("/api/defective/getCategory");

    CATEGORY.value = result.data as DefectiveCategoryModel[];

    isLoading.value = false; // Set loading state to false when data is fetched
  } catch {
    alert("Fetch error");
  }
};
const getSubCategory = async () => {
  try {
    const result = await $fetch("/api/defective/getSubCategory");

    SUB_CATEGORY.value = result.data as DefectiveCategoryModel[];

    isLoading.value = false; // Set loading state to false when data is fetched
  } catch {
    alert("Fetch error");
  }
};

let filteredSubCategories = computed(() => {
  return SUB_CATEGORY.value.filter(
    (SUBCATEGORY) => SUBCATEGORY.PARENT_CAT === form.CATEGORY,
  );
});
const insertData = async () => {
  // 입력값 검증을 위한 플래그 설정
  let isValid = true;
  let alertMessage = "";

  // 각 입력 필드에 대한 검증
  if (!form.DATE.trim()) {
    isValid = false;
    alertMessage += "DATE를 입력해주세요.\n";
  }
  if (!form.PART.trim()) {
    isValid = false;
    alertMessage += "PART를 입력해주세요.\n";
  }
  if (!form.CATEGORY.trim()) {
    isValid = false;
    alertMessage += "CATEGORY를 입력해주세요.\n";
  }
  if (!form.SUB_CATEGORY.trim()) {
    isValid = false;
    alertMessage += "SUB CATEGORY를 입력해주세요.\n";
  }
  if (!form.COUNT) {
    isValid = false;
    alertMessage += "COUNT를 입력해주세요.\n";
  }
  const countNumber = Number(form.COUNT);
  if (!form.COUNT || isNaN(countNumber) || countNumber <= 0) {
    isValid = false;
    alertMessage += "COUNT에는 0보다 큰 숫자를 입력해주세요.\n";
  }
  // if (!form.ETC.trim()) {
  //   isValid = false;
  //   alertMessage += 'ETC를 입력해주세요.\n';
  // }

  // 유효성 검사가 실패한 경우 alert을 띄우고 함수 종료
  if (!isValid) {
    alert(alertMessage);
    return;
  }
  try {
    await $fetch("/api/defective", {
      method: "POST",
      body: form,
    });
    alert("등록되었습니다.");
    await fetchData();
    // router.push('/blog');
  } catch {
    alert("Post blog error");
  }
};

const onDelete = async (no: number) => {
  try {
    console.log("no: " + no);
    await $fetch("/api/defective/" + no, {
      method: "DELETE",
    });
    alert(" " + no + "번 삭제될.");
    await fetchData();
  } catch {
    alert("Delete error");
  }
};
onMounted(fetchData);

const resetForm = () => {
  form.DATE = "";
  form.PART = "";
  form.CATEGORY = "";
  form.SUB_CATEGORY = "";
  form.COUNT = 0 as any;
  form.ETC = "";
};
// const insertData = () => {
//   data.value.push({ ...form });
//   resetForm();
// };

// excel 데이터 받기
const exportToExcel = () => {
  const data = getInsertData.value; // Assuming getInsertData contains the table data

  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

  const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const blob = new Blob([wbout], { type: "application/octet-stream" });

  const fileName = "table_data.xlsx";
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.click();

  URL.revokeObjectURL(url);
};
</script>
<style scoped>
label {
  padding-left: 10%;
  font-size: small;
  border-bottom: 1px solid rgb(182, 67, 67);
  width: 100%;
  margin-bottom: 5px;
  text-align: center;
}
.col {
  margin-right: 7px;
}
.form-control::placeholder {
  font-size: 12px; /* 원하는 글자 크기로 조정 */
}
@media (max-width: 720.98px) {
  .table-sm td {
    font-size: 0.7rem; /* A
    /* font-size:.2em; 예시로 14px로 설정 */
  }
}
td {
  font-weight: 300;
}
@media (max-width: 720.98px) {
  .table-sm th {
    font-size: 0.7rem; /* A
    /* font-size:.2em; 예시로 14px로 설정 */
  }
}
th {
  font-weight: 500;
}
.table-sm .btn {
  font-size: 0.7rem;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url('data:image/svg+xml;utf8,<svg fill="black" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
  background-repeat: no-repeat;
  background-position: right center;
  padding-right: 1.5em; /* Adjust as needed */
  font-size: 0.8rem;
}
input {
  font-size: 0.8rem;
}
</style>

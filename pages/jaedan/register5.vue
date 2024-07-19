<template>
  <div class="w-full max-w-3xl mx-auto py-8">
    <h5 class="text-center mt-2">재단 작업 등록</h5>
    <hr />

    <!-- {{ jaedanRecord }} -->

    <div v-if="isLoading">
      <!-- Show loading indicator -->
      <p>Loading...</p>
    </div>
    <div v-else class="container chart_container"></div>

    <div class="album py-5 bg-body-tertiary"></div>
    <!-- {{ jaedanRecord }} -->
    {{ wondanStore.selectedWondan }}
    <hr />

    <div class="container">
      <!--  -->
      <form class="">
        <div class="d-flex justify-content-between">
          <div class="col-3">
            <label for="validationDefault01">등록일</label>
            <input
              v-model="form.CREATE_DATE"
              type="date"
              class="form-control border border-success"
              id="validationDefault01"
              placeholder="등록자"
              required
            />
          </div>
          <div class="col"></div>
          <div class="col-3">
            <label for="validationDefault01">작업일</label>
            <input
              v-model="form.WORK_DATE"
              type="date"
              class="form-control border border-success"
              id="validationDefault01"
              placeholder="등록자"
              required
            />
          </div>
        </div>

        <hr />

        <div class="d-flex flex-wrap">
          <!-- {{ product }} -->

          <div
            class="col-12 col-md-12 col-lg-3 border_bottom text-center text-lg-start mb-3 bg-lg-white p-1 p-lg-0"
          >
            <label for="validationDefault01">공정등록번호</label>

            <span>
              <!-- <img v-if="imageSrc" :src="imageSrc" alt="jaedan" style="width: 20px;"> -->
            </span>
            <!--  -->
            <!-- <span class="badge bg-warning text-white rounded-circle reg-no-badge"> -->
            <span
              :class="[
                'badge bg-warning text-white rounded-circle reg-no-badge',
                { 'reg-no-badge-reg': REG_STATE?.toString() === '1' },
              ]"
              style="font-size: 10px"
            >
              <span class="flex-center" style="font-size: 0.9em">{{
                REG_NO
              }}</span>
            </span>
            <!--  -->

            <span class="mx-3">
              {{
                REG_CREATE_DATE ? formatDate(REG_CREATE_DATE) : "날짜 없음"
              }}
              /
            </span>
            <span> {{ REG_JAEDAN_PART_NAME }} </span>
            <span>{{ REG_COUNT }} </span>
          </div>

          <!-- <div class="col-2">
            <label for="validationDefault01">날짜</label>
            <input v-model="form.CREATE_DATE" type="DATE" class="form-control border border-success" id="validationDefault01" placeholder="DATE" required>
            </div> 
          -->

          <!-- <div class="col-1 col-lg-1 d-none">
                <label for="validationDefault01">품명</label>
                <input  type="text"  class="form-control border border-success" id="validationDefault01" placeholder=""  required>
              </div> -->

          <!--  -->
          <!-- <div class="col-6 col-lg-4">
  <label for="workingPartSelect">품명</label>
  <select v-model="form.WORKING_PART" id="workingPartSelect" class="form-control border border-success">
    <option class="mx-2" v-for="part in WORKING_PART" :value="part.ID" :key="part.index">
      <span>{{ part.ID }}</span>
      <span>  [  </span>
      <span class="mx-2"> {{ part.ASSY_PART_NAME }}</span> 
      <span>  / </span>
      <span style="margin-right: 10px;"> {{ part.ASSY_SUB_PART_NAME }}</span>
      <span>  ] </span>
      <span> {{ part.JAEDAN_PART_NAME }}</span>
      <span>  - </span>
      <span> {{ part.WONDAN_NAME }}</span>
    </option>
  </select>
</div> -->
          <!--  -->

          <!-- <div class="col-3 col-lg-2 ">
                  <label for="validationDefault01">공정등록번호</label>
                  <input v-model="form.WORK_ORDER_NO" type="text" class="form-control border border-success" id="validationDefault01" placeholder="COUNT" required>
              </div> -->
          <div class="col-4 col-lg-3">
            <label for="validationDefault01">원단번호</label>

            <!-- <select v-model="form.WONDAN_NAME" id="workingPartSelect" class="form-control border border-success" required @change="updateSelectedWondan" >
              <option value="" disabled selected>원단 종류를 선택하세요</option>
              <option v-for="wondan in filteredWondan" :value="wondan.WONDAN_NAME" :key="wondan.WONDAN_NAME">
                <span>{{ wondan }}</span>
                <span>{{ wondan.WONDAN_NAME }}</span>
              
              </option>
            </select> -->

            <select
              v-model="selectedWondanName"
              id="workingPartSelect"
              class="form-control border border-success"
              required
              @change="updateSelectedWondan"
            >
              <option value="" disabled>원단 종류를 선택하세요</option>
              <option
                v-for="wondan in filteredWondan"
                :value="wondan.WONDAN_NAME"
                :key="wondan.WONDAN_NAME"
              >
                <span>{{ wondan }}</span>
              </option>
            </select>

            <!-- <input v-model="form.WONDAN_STORE" type="text" class="form-control border border-success" id="validationDefault01" placeholder="WONDAN_STORE" required> -->
          </div>
          <div class="col-4 col-lg-3">
            <label for="validationDefault01">원단번호</label>

            <!-- <select v-model="selectedWondanName" id="workingPartSelect" class="form-control border border-success" required @change="updateSelectedWondan">
                    <option value="" disabled>원단 종류를 선택하세요</option>
                    <option v-for="wondan in filteredWondan" :value="wondan.WONDAN_NAME" :key="wondan.WONDAN_NAME">
                      <span>{{ wondan.WONDAN_NAME }}</span>
                    </option>
                  </select> -->

            <select
              v-model="selectedWondanName"
              id="workingPartSelect"
              class="form-control border border-success"
              required
              @change="updateSelectedWondan"
            >
              <option value="" disabled>원단 종류를 선택하세요</option>
              <option
                v-for="wondan in filteredWondan"
                :value="wondan"
                :key="wondan.WONDAN_NAME"
              >
                <span>{{ wondan.WONDAN_NAME }}</span>
              </option>
            </select>
            <!-- <input v-model="form.WONDAN_STORE" type="text" class="form-control border border-success" id="validationDefault01" placeholder="WONDAN_STORE" required> -->
          </div>
          <div class="col-2 col-lg-1">
            <label for="validationDefault01">원단</label>
            <input
              v-model="form.WONDAN_MANAGER_NO"
              type="text"
              class="form-control border border-success"
              id="validationDefault01"
              placeholder="원단관리번호"
              required
            />
          </div>
          <div class="col-4 col-lg">
            <label for="validationDefault01">LOT</label>

            <input
              v-model="form.LOT"
              type="text"
              class="form-control border border-success"
              id="validationDefault01"
              placeholder="COUNT"
              required
            />
          </div>

          <!--  -->
          <div class="col-3 col-lg-1">
            <label for="validationDefault01">연단번호</label>

            <input
              v-model="form.Y_COUNT"
              type="text"
              class="form-control border border-success"
              id="validationDefault01"
              placeholder="등록자"
              required
            />
          </div>
          <div class="col-2 col-lg-1">
            <label for="validationDefault01">MARK</label>

            <input
              v-model="form.MARKS"
              type="text"
              class="form-control border border-success"
              id="validationDefault01"
              placeholder="등록자"
              required
            />
          </div>
          <div class="col">
            <label for="validationDefault01">수량</label>

            <input
              v-model="form.COUNT"
              type="text"
              class="form-control border border-success"
              id="validationDefault01"
              placeholder="등록자"
              required
            />
          </div>
          <div class="col-2 col-lg-1">
            <label for="validationDefault01">불량</label>

            <input
              v-model="form.DEFECTIVE"
              type="text"
              class="form-control border border-success"
              id="validationDefault01"
              placeholder="등록자"
              required
            />
          </div>

          <div class="col">
            <label for="validationDefault01">등록자</label>

            <!-- <input v-model="form.REG_ACCOUNT" type="text" class="form-control border border-success" id="validationDefault01" placeholder="등록자" required> -->
            <input
              v-model="regUser"
              type="text"
              class="form-control border border-success"
              id="validationDefault01"
              placeholder="등록자"
              required
              readonly
            />
          </div>

          <div class="d-flex"></div>

          <!--  -->
          <div class="d-flex d-flex-wrap"></div>
        </div>
        <div class="d-flex"></div>
      </form>
      <!--  -->
      <div class="d-flex mt-1 w-100 justify-content-center">
        <button
          @click="insertData"
          class="btn btn-warning btn-sm w-50 text-white mt-2"
          type="submit"
        >
          INSERT
        </button>
      </div>
    </div>

    <hr />
    <div class="container">
      <p class="text-end me-4">최근데이터 10개</p>

      <!--  -->
      <div class="table-responsive">
        <table class="table table-sm text-center">
          <thead>
            <tr>
              <!-- <th>DATE</th> -->
              <th class="">NO</th>

              <th>등록일</th>
              <th>등록번호</th>
              <th>공정명</th>

              <th>원단관리</th>
              <th>LOT</th>
              <th>연단수</th>
              <th>마크수</th>
              <th>재단수</th>

              <th class="">불량</th>
              <th class="">상태</th>
              <th class="">작업일</th>
              <th class="d-none d-md-table-cell">등록자</th>

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
            <tr v-for="(item, index) in jaedanRecord" :key="index">
              <td>{{ item.NO }}</td>
              <td>{{ formatDate(item.CREATE_DATE) }}</td>

              <td>{{ item.WORK_ORDER_NO }}</td>
              <td>{{ item.JAEDAN_PART_NAME }}</td>
              <td>{{ item.WONDAN_MANAGER_NO }}</td>
              <td>{{ item.LOT }}</td>
              <td>{{ item.Y_COUNT }}</td>

              <td>{{ item.MARKS }}</td>
              <td>{{ item.COUNT }}</td>
              <td>{{ item.DEFECTIVE }}</td>

              <td>{{ item.STATE }}</td>
              <td>{{ formatDate(item.WORK_DATE) }}</td>

              <td class="d-none d-md-table-cell">
                {{ item.REG_ACCOUNT_NAME }}
              </td>

              <td>
                <!-- <div v-if="item.STATE === 1"> -->
                <div>
                  <div
                    class="btn btn-sm btn-danger me-1"
                    @click="onDelete(item.NO)"
                  >
                    삭제
                  </div>
                  <div
                    class="btn btn-sm btn-warning text-white"
                    @click="onRegister(item)"
                  >
                    재단완료
                  </div>
                </div>
                <!-- <div v-else-if="item.STATE === 0"> -->
                <div>
                  <div class="btn btn-sm btn-success" @click="onRegister(item)">
                    재단완료
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--  -->
    </div>
    <hr />
  </div>
</template>

<script setup lang="ts">
import type { WorkOrderModel } from "~~/server/model/workOrder";
import type { WORKING_PART_Model } from "~~/server/model/working_part";
import type { JaedanModel } from "~~/server/model/jaedan";
import type { WondanModel } from "~~/server/model/wondan";
import { formatDate } from "../../utils/datefomatter";
import { useRoute } from "vue-router";
import { useWorkStore } from "~/store/works";
import { useAccountStore } from "~/stores/account";
import { useWondanStore } from "~/stores/wondan";

const wondanStore = useWondanStore();
import * as XLSX from "xlsx";
useHead({
  title: "List Page",
});
const route = useRoute();
const router = useRouter();
const accountStore = useAccountStore();
const REG_NO = ref<number | undefined>(undefined);
const form = reactive({
  WORK_ORDER_NO: REG_NO.value,
  WONDAN_STORE: "",
  WONDAN_MANAGER_NO: "",
  LOT: "",
  Y_COUNT: "",
  MARKS: "",
  COUNT: "",
  DEFECTIVE: "",
  CREATE_DATE: "",
  WORK_DATE: "",
  REG_ACCOUNT: parseInt(accountStore.user ? accountStore.user.NO : ""),
});

const jaedanRecord = ref<JaedanModel[]>([]);
const jaedanItem = ref<JaedanModel[]>([]);
const WORKING_PART = ref<WORKING_PART_Model[]>([]);
const workOrderList = ref<WorkOrderModel[]>([]);
// const wondanCode = ref([]);
const useableWondan = ref<WondanModel[]>([]);
const selectOrder = ref<number | string | undefined>(undefined);

const REG_JAEDAN_PART_NAME = ref<string | undefined>(undefined);

const REG_CREATE_DATE = ref<WorkOrderModel | undefined>(undefined);

const REG_COUNT = ref<number | undefined>(undefined);
const REG_STATE = ref<number | undefined>(undefined);

const imageSrc = ref("");
// const selectOrder = ref<any>();
const regUser = ref("");
const isLoading = ref(true);

const fetchData = async () => {
  try {
    const NO = route.query.param;
    const getOrder = await $fetch(`/api/workOrder/getOrder/${NO}`);
    const selectOrder1 = ref<WorkOrderModel | undefined>(undefined);
    selectOrder1.value = getOrder.data as WorkOrderModel | undefined;
    selectOrder.value = selectOrder1.value;
    if (selectOrder.value) {
      REG_JAEDAN_PART_NAME.value = selectOrder.value.JAEDAN_PART_NAME;
      REG_CREATE_DATE.value = selectOrder.value.CREATE_DATE;
      REG_NO.value = selectOrder.value.NO;
      form.WORK_ORDER_NO = REG_NO.value;
      REG_COUNT.value = selectOrder.value.COUNT;
      REG_STATE.value = selectOrder.value.STATE;

      const useableWondanList = await $fetch("/api/wondan/getUseable");
      useableWondan.value = useableWondanList.data;
      // wondanCode.value = useableWondanList.data;
    } else {
      console.log("selectOrder is undefined");
    }

    const jaedanList = await $fetch("/api/jaedan/getRecord10");
    jaedanRecord.value = jaedanList.data as JaedanModel[];

    const result = await $fetch("/api/workOrder/getOrder");
    console.log("resut data", result.data);
    workOrderList.value = result.data as WorkOrderModel[];

    const WORKING_PART_Data = await $fetch("/api/working_part/getWORKING_PART");
    WORKING_PART.value = WORKING_PART_Data.data as WORKING_PART_Model[];
    console.log("workOrderList", workOrderList.value);
    regUser.value = accountStore.user ? accountStore.user.NAME : "";
    isLoading.value = false;
  } catch {
    alert("Fetch error");
  }
};

// const fetchUseableWondan = async () => {
//   try {
//     const useableWondanList = await $fetch('/api/wondan/getUseable');
//     useableWondan.value = useableWondanList.data;
//   } catch {
//     alert('Fetch error');
//   }
// };

const insertData = async () => {
  // 입력값 검증을 위한 플래그 설정
  let isValid = true;
  let alertMessage = "";

  if (!form.CREATE_DATE.trim()) {
    isValid = false;
    alertMessage += "CREATE_DATE를 입력해주세요.\n";
  }
  if (!form.WONDAN_STORE.trim()) {
    isValid = false;
    alertMessage += "WONDAN_STORE를 입력해주세요.\n";
  }
  if (!form.WONDAN_MANAGER_NO.trim()) {
    isValid = false;
    alertMessage += "WONDAN_MANAGER_NO를 입력해주세요.\n";
  }
  if (!form.LOT.trim()) {
    isValid = false;
    alertMessage += "LOT를 입력해주세요.\n";
  }

  const Y_COUNT_Number = Number(form.Y_COUNT);
  if (isNaN(Y_COUNT_Number) || Y_COUNT_Number <= 0) {
    isValid = false;
    alertMessage += "유효한 Y_COUNT를 입력해주세요.\n";
  }

  const MARKS_Number = Number(form.MARKS);
  if (isNaN(MARKS_Number) || MARKS_Number <= 0) {
    isValid = false;
    alertMessage += "유효한 MARKS를 입력해주세요.\n";
  }

  const countNumber = Number(form.COUNT);
  if (isNaN(countNumber) || countNumber <= 0) {
    isValid = false;
    alertMessage += "유효한 COUNT를 입력해주세요.\n";
  }

  const DEFECTIVE_Number = Number(form.DEFECTIVE);
  if (isNaN(DEFECTIVE_Number) || DEFECTIVE_Number < 0) {
    // 불량 수는 0 이상이어야 함
    isValid = false;
    alertMessage += "유효한 DEFECTIVE를 입력해주세요.\n";
  }

  if (!form.REG_ACCOUNT && form.REG_ACCOUNT !== 0) {
    isValid = false;
    alertMessage += "등록자를 입력해주세요.\n";
  }
  if (!isValid) {
    alert(alertMessage);
    return;
  }

  try {
    await $fetch("/api/jaedan", {
      method: "POST",
      body: form,
    });
    alert("등록되었습니다.");
    ////////////////////////////////////////////////////////
    const NO = REG_NO.value;
    console.log("NO", NO);

    // REG_NO의 값을 사용하여 STATE 업데이트 요청
    if (REG_NO.value !== undefined) {
      try {
        await $fetch("/api/workOrder/updateState", {
          method: "POST",
          body: { NO: REG_NO.value }, // REG_NO의 값을 사용합니다.
        });
        console.log("STATE 컬럼이 0으로 업데이트되었습니다.");
      } catch (error) {
        console.error("STATE 업데이트 중 오류 발생:", error);
      }
    } else {
      console.error("REG_NO가 정의되지 않았습니다.");
    }

    ///////////////////////////////////////////////////////
    await fetchData();
  } catch {
    alert("RECORD error");
  }
};

const onRegister = async (item: JaedanModel) => {
  const state = item.STATE;
  console.log("state :", state);
  await $fetch(`/api/jaedan/${item.NO}`, {
    method: "PUT",
    body: {
      STATE: 1, // 상태를 1로 설정
    },
  });
};

const selectedWondanName = ref("");

const updateSelectedWondan = () => {
  console.log("selectedWondanName", selectedWondanName.value);
  wondanStore.setWondan(selectedWondanName.value);
};

const selectedWondanNames = ref([]);

const updateSelectedWondans = () => {
  const selectedWondans = filteredWondan.value.filter((wondan) =>
    selectedWondanNames.value.includes(wondan.WONDAN_NAME),
  );
  console.log("selectedWondans", selectedWondans);
  wondanStore.setWondan(selectedWondans);
};

const filteredWondan = computed(() => {
  if (!selectOrder.value) return [];
  return useableWondan.value.filter((wondan) =>
    wondan.WONDAN_NAME.includes(selectOrder.value.WONDAN_NAME),
  );
});

// const updateSelectedWondan = () => {
//   const selectedWondans = useableWondan.value.filter(wondan => wondan.WONDAN_NAME === form.WONDAN_NAME);
//   console.log("selectedWondans", selectedWondans);
//   if (selectedWondans.length > 0) {
//     wondanStore.setWondan(selectedWondans[0]); // 첫 번째 일치하는 항목을 저장
//   }
// };

watch(() => form.WONDAN_NAME, updateSelectedWondan);
onMounted(async () => {
  await fetchData();

  // Set the selected WONDAN_STORE based on selectOrder.WONDAN_NAME
  if (selectOrder.value) {
    form.WONDAN_STORE = selectOrder.value.WONDAN_NAME;
  }
  imageSrc.value = "/images/jaedan.png";
});
// const filteredWondan = computed(() => {
//   if (!selectOrder.value) return [];
//   return useableWondan.value.filter(wondan => wondan.WONDAN_NAME.includes(selectOrder.value.WONDAN_NAME));
// });

// const onDelete = async (NO: number) => {
//   try {
//     console.log("no: "+NO)
//     await $fetch('/api/workOrder/' + NO, {
//       method: 'DELETE'
//     });
// alert(" "+NO+"번 삭제될.");
//     await fetchData();
//   } catch {
//     alert('Delete error');
//   }
// };
const onDelete = async (NO: number) => {
  console.log("no: " + NO);
  const confirmation = confirm(NO + "번 항목을 정말 삭제하시겠습니까?");
  if (!confirmation) {
    return; // 사용자가 취소를 선택하면 함수 실행을 중단
  }

  try {
    await $fetch("/api/jaedan/" + NO, {
      method: "DELETE",
    });
    alert(NO + "번 항목이 삭제되었습니다.");
    await fetchData();
  } catch (error) {
    alert("삭제 중 오류가 발생했습니다.");
  }
};

// excel 데이터 받기
const exportToExcel = () => {
  const data = workOrderList.value; // Assuming getInsertData contains the table data

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
.col,
.col-1,
.col-2,
.col-3,
.col-4 {
  margin-right: 5px;
  text-align: center;
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
  background-color: rgb(247, 226, 226);
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
.reg-no-badge1 {
  display: inline-block;
  width: 30px; /* 원의 크기를 조절하고 싶다면 이 값을 조정하세요 */
  height: 30px; /* 원의 크기를 조절하고 싶다면 이 값을 조정하세요 */
  text-align: center;
  line-height: 30px; /* 높이와 동일하게 설정하여 텍스트를 수직 중앙에 위치시킵니다 */
}
.reg-no-badge2 {
  display: inline-block;
  width: 30px; /* 원의 크기를 조절하고 싶다면 이 값을 조정하세요 */
  height: 30px; /* 원의 크기를 조절하고 싶다면 이 값을 조정하세요 */
  text-align: center;
  line-height: 30px; /* 높이와 동일하게 설정하여 텍스트를 수직 중앙에 위치시킵니다 */
  vertical-align: middle; /* 추가된 속성: 수직 가운데 정렬을 개선 */
}
.reg-no-badge3 {
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  width: 30px; /* 원의 크기를 조절하고 싶다면 이 값을 조정하세요 */
  height: 30px; /* 원의 크기를 조절하고 싶다면 이 값을 조정하세요 */
  border-radius: 50%; /* 원 모양 만들기 */
  background-color: #ffc107; /* Bootstrap 경고색 */
  color: white; /* 글자색 */
  font-size: 12px; /* 글자 크기 조정 */
}
.reg-no-badge {
  width: 30px;
  height: 30px;
  border-radius: 50%; /* 원 모양 만들기 */
  background-color: #ffc107; /* Bootstrap 경고색 */
  color: white; /* 글자색 */
}
.reg-no-badge-reg {
  width: 30px;
  height: 30px;
  border-radius: 50%; /* 원 모양 만들기 */
  background-color: #3737c9; /* Bootstrap 경고색 */
  color: rgb(237, 89, 89); /* 글자색 */
}

.flex-center {
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  width: 100%;
  height: 100%;
}
.border_bottom {
  border-bottom: 1px solid rgb(182, 67, 67);
  background-color: #faf9f9;
}
</style>

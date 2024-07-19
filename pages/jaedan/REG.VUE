<template>
    <div class="w-full max-w-3xl mx-auto py-8">
      <h5 class="text-center mt-2">재단 작업 등록</h5>
      <hr>
      
      
      
      <div v-if="isLoading">
        <!-- Show loading indicator -->
        <p>Loading...</p>
      </div>
      <div v-else class="container chart_container" >
    
      </div>
  
    <div class="album py-5 bg-body-tertiary">
     
    </div>
    {{ jaedanRecord }}
   <hr>
    selectOrder{{ selectOrder }}
    
   
    <!-- workOrderList{{workOrderList}} -->
    <!-- WORKING_PART    {{ WORKING_PART}} -->
    <div  class="container">
        <!--  -->
        <form class="">
          <div class="d-flex justify-content-between">
          
            
            
          </div>
          
          <hr>
          
          <div class=" d-flex flex-wrap">
            <!-- {{ product }} -->
          
            
               <div class="col-3">
               <label for="validationDefault01">등록번호</label>
            
                <span>  
                  <img v-if="imageSrc" :src="imageSrc" alt="jaedan" style="width: 20px;">
                 
                 </span>
                 <!--  -->
                 <!-- <span class="badge bg-warning text-white rounded-circle reg-no-badge"> -->
                  <span :class="['badge bg-warning text-white rounded-circle reg-no-badge', { 'reg-no-badge-reg': REG_STATE === 0 }]">
                 <span class="flex-center">{{ REG_NO }}</span>
                </span>
                <!--  -->
  
                <span class="mx-3">
                  {{ REG_CREATE_DATE ? formatDate(REG_CREATE_DATE) : '날짜 없음' }} /
                  </span>
                <span> {{REG_JAEDAN_PART_NAME}} </span>
                <span>{{ REG_COUNT }} </span>
              </div> 
               
               
              
              
            <div class="col-2">
              <label for="validationDefault01">날짜</label>
              <input v-model="form.CREATE_DATE" type="DATE" class="form-control border border-success" id="validationDefault01" placeholder="DATE" required>
              </div> 
           
               
                <div class="col-1 col-lg-1 d-none">
                  <label for="validationDefault01">품명</label>
                  <input  type="text"  class="form-control border border-success" id="validationDefault01" placeholder=""  required>
                </div>
  
                
               
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
        
                <div class="col-3 col-lg-2 ">
                    <label for="validationDefault01">COUNT</label>
                    <input v-model="form.COUNT" type="text" class="form-control border border-success" id="validationDefault01" placeholder="COUNT" required>
                </div>
                <div class="col-3 col-lg-2 ">
                    <label for="validationDefault01">COUNT</label>
                  
                    <input v-model="form.COUNT" type="text" class="form-control border border-success" id="validationDefault01" placeholder="COUNT" required>
                </div>
        
                  <!--  -->
                  <div class="col-2 col-lg-2">
                    <label for="validationDefault01">등록자</label>
                    
                    <input v-model="form.REG_ACCOUNT" type="text" class="form-control border border-success" id="validationDefault01" placeholder="등록자" required>
                  </div>
  
            <div class="d-flex">
                 
                
            </div>
             
            <!--  -->
            <div class="d-flex d-flex-wrap">
               
            </div>
            
          </div>
          <div class="d-flex">
          </div>  
          
        </form>
  <!--  -->
  <div class="d-flex mt-1 w-100 justify-content-center  ">
     <button @click="insertData"  class="btn btn-warning btn-sm w-50 text-white mt-2" type="submit">INSERT</button>
    </div>
    </div>
    
  <hr>
  <div class="container">
    
   
    <p class="text-end me-4">최근데이터 10개</p>
         
         <!--  -->
         <div class="table-responsive">
          <table class="table table-sm text-center">
              <thead >
                  <tr >
                      <!-- <th>DATE</th> -->
                      <th class="" >NO</th>
                   
                      <th>등록일</th>
                      <th>품명</th>
                      <th>원단명</th>
                      
                      <th>COUNT</th>
                      <th>원단관리번호</th>
                     
                      <th class="">LOT</th>
                      <th class="">연단번호</th>
                      <th class="">MARKS</th>
                      <th class="">진행상태</th>
                      <th class="">수량</th>
                      <th class="">불량</th>
                      <th class="d-none d-md-table-cell">등록자</th>
                     
                      <th>
                         <div class="btn btn-sm btn-success sm-btn" @click="exportToExcel">
                          <svg width="24px" height="14px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <g>
                          <path fill="white" d="M0 0h24v24H0z"/>
                          <path d="M2.859 2.877l12.57-1.795a.5.5 0 0 1 .571.495v20.846a.5.5 0 0 1-.57.495L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99zM4 4.735v14.53l10 1.429V3.306L4 4.735zM17 19h3V5h-3V3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4v-2zm-6.8-7l2.8 4h-2.4L9 13.714 7.4 16H5l2.8-4L5 8h2.4L9 10.286 10.6 8H13l-2.8 4z"/>
                           </g>
                           </svg></div></th>
                  </tr>
              </thead>
              <tbody>
                
                <tr v-for="(item, index) in workOrderList" :key="index">
                  <td>{{item.NO }}</td>
                  <td>{{formatDate(item.CREATE_DATE) }}</td>
                  
                  <td>{{ item.ASSY_PART_NAME }} {{ item.ASSY_SUB_PART_NAME }} / {{ item.JAEDAN_PART_NAME }} </td>
                  <td>{{ item.WONDAN_NAME }}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                 
                  <td></td>
                  
                  
                 
                  <td>{{ item.COUNT }}</td>
                  <td>{{ item.STATE }}</td>
                  
                  <td class="d-none d-md-table-cell">{{ item.REG_ACCOUNT }}</td>
                
                  <td>
                        <div v-if="item.STATE === 1">
                          <div class="btn btn-sm btn-danger me-1" @click="onDelete(item.NO)">삭제</div>
                          <div class="btn btn-sm btn-warning text-white" @click="onRegister(item)">재단등록</div>
                        </div>
                        <div v-else-if="item.STATE === 0">
                          <div class="btn btn-sm btn-success" @click="onRegister(item)">재단등록됨</div>
                        </div>
                </td>
                </tr>
              </tbody>
          </table>   
         </div>
         <!--  -->
  </div>
  
  <hr>
  
    </div>
  </template>
    
  <script setup lang="ts">
  
  import type { WorkOrderModel } from '~~/server/model/workOrder';
  import type { WORKING_PART_Model } from '~~/server/model/working_part';
  import type { JaedanModel, } from '~~/server/model/jaedan';
  import { formatDate } from '../../utils/datefomatter';
  import { useRoute } from 'vue-router';
  import { useWorkStore } from '~/store/works';
  import * as XLSX from 'xlsx';
  useHead({
    title: 'List Page'
  });
  const route = useRoute();
  const router = useRouter();
  
  const form = reactive({
        CREATE_DATE:'',
        WORKING_PART:'',
        COUNT:'',
        REG_ACCOUNT:'',
  });
  interface WorkOrderModel {
    NO: number;
    WORKING_PART: number;
    COUNT: number;
    CREATE_DATE: string;
    STATE: number;
    ORDER_STATE: number;
    REG_ACCOUNT: number;
    ORDER_ACCOUNT: string;
    JAEDAN_PART_NAME: string
    PD_NAME: string
    REG_STATE: string
  }
  const jaedanRecord = ref<JaedanModel[]>([]);
  const jaedanItem = ref<JaedanModel[]>([]);
  const WORKING_PART = ref<WORKING_PART_Model[]>([]);
  const workOrderList = ref<WorkOrderModel[]>([]);
  
  const selectOrder = ref<number | string | undefined>(undefined);
  
  const REG_JAEDAN_PART_NAME = ref<string | undefined>(undefined);
  const REG_NO = ref<number | undefined>(undefined);
  const REG_CREATE_DATE = ref<string | undefined>(undefined);
  
  
  const REG_COUNT = ref<number | undefined>(undefined);
  const REG_STATE = ref<number | undefined>(undefined);
  
  const imageSrc = ref(''); 
    // const selectOrder = ref<any>();
  const isLoading = ref(true);
  
  const fetchData = async () => {
    try {
      const NO = route.query.param;
      const getOrder = await $fetch(`/api/workOrder/getOrder/${NO}`);
      const selectOrder = ref<WorkOrderModel | undefined>(undefined);
  
      if (selectOrder.value) {
        REG_JAEDAN_PART_NAME.value = selectOrder.value.JAEDAN_PART_NAME;
        REG_CREATE_DATE.value = selectOrder.value.CREATE_DATE;
        REG_NO.value = selectOrder.value.WORK_ORDER_NO;
        REG_COUNT.value = selectOrder.value.COUNT;
        REG_STATE.value = selectOrder.value.STATE;
       
      } else {
        console.log("selectOrder is undefined");
      }
  
      const jaedanList = await $fetch('/api/jaedan/getRecord10');
      jaedanRecord.value = jaedanList.data as JaedanModel[];
  
      const result = await $fetch('/api/workOrder/getOrder');
      console.log("result data", result.data);
      workOrderList.value = result.data as WorkOrderModel[];
  
      const WORKING_PART_Data = await $fetch('/api/working_part/getWORKING_PART');
      WORKING_PART.value = WORKING_PART_Data.data as WORKING_PART_Model[];
      console.log("workOrderList", workOrderList.value);
  
      isLoading.value = false; // Set loading state to false when data is fetched
    } catch {
      alert('Fetch error');
    }
  };
  
  const insertData = async () => {
    // 입력값 검증을 위한 플래그 설정
    let isValid = true;
    let alertMessage = '';
  
    // 각 입력 필드에 대한 검증
    if (!form.CREATE_DATE.trim()) {
      isValid = false;
      alertMessage += 'DATE를 입력해주세요.\n';
    }
    // if (!form.WORKING_PART.trim()) {
    //   isValid = false;
    //   alertMessage += 'PRODUCT 를 입력해주세요.\n';
    // }
    
    const countNumber = Number(form.COUNT);
    if (!form.COUNT || isNaN(countNumber) || countNumber <= 0) {
        isValid = false;
      alertMessage += '수량 을 입력해주세요.\n';
    }
   
    if (!form.REG_ACCOUNT.trim()) {
      isValid = false;
      alertMessage += '등록자를 를 입력해주세요.\n';
    }
    
    
    try {
      await $fetch('/api/workOrder', {
        method: 'POST',
        body: form
      });
  alert('등록되었습니다.');
  await fetchData();
      // router.push('/blog');
    } catch {
      alert('RECORD error');
    }
  };
  
  
  
  
  
  onMounted(() => {
    fetchData();
    imageSrc.value = '/images/jaedan.png';
  });
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
    const confirmation = confirm(NO + "번 항목을 정말 삭제하시겠습니까?");
    if (!confirmation) {
      return; // 사용자가 취소를 선택하면 함수 실행을 중단
    }
  
    try {
      await $fetch('/api/workOrder/' + NO, {
        method: 'DELETE'
      });
      alert(NO + "번 항목이 삭제되었습니다.");
      await fetchData();
    } catch (error) {
      alert('삭제 중 오류가 발생했습니다.');
    }
  };
  
  // excel 데이터 받기
  const exportToExcel = () => {
    const data = workOrderList.value; // Assuming getInsertData contains the table data
  
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([wbout], { type: 'application/octet-stream' });
  
    const fileName = 'table_data.xlsx';
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
  
    URL.revokeObjectURL(url);
  };
  </script>
    <style scoped>
    label{
      padding-left: 10%;
      font-size: small;
      border-bottom: 1px solid rgb(182, 67, 67);
      width: 100%;
      margin-bottom: 5px;
    }
    .col, .col-1, .col-2,.col-4{
      margin-right: 5px;
      text-align: center;
    }
    .form-control::placeholder {
      font-size: 12px; /* 원하는 글자 크기로 조정 */
    }
    @media (max-width: 720.98px) {
      .table-sm td {
        font-size: .7rem; /* A
        /* font-size:.2em; 예시로 14px로 설정 */
      }
    }
    td{
      font-weight: 300;
    }
    @media (max-width: 720.98px) {
      .table-sm th {
        font-size: .7rem; /* A
        /* font-size:.2em; 예시로 14px로 설정 */
      }
    }
    th{
      font-weight: 500;
      background-color: rgb(247, 226, 226)
    }
    .table-sm   .btn{
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
    font-size: .8rem;
  }
  input {
    font-size: .8rem
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
    color: white; /* 글자색 */
  }
  
  .flex-center {
    display: flex;
    justify-content: center; /* 수평 중앙 정렬 */
    align-items: center; /* 수직 중앙 정렬 */
    width: 100%;
    height: 100%;
  }
    </style>
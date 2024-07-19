<template>
  <div ref="modalRef" class="modal" tabindex="-1" role="dialog" id="editModal">
    <div class="" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Report</h5>
        </div>
        <div class="container">
          <form>
            <div class="">
              <div>Report</div>
              <div
                class="d-flex align-items-center mb-1 justify-content-between"
              >
                <div class="d-flex align-items-center mb-1">
                  <label class="form-label col-4" for="editDate">등록일</label>
                  <input
                    v-model="Form.WORK_DATE"
                    type="text"
                    class="form-control border border-success"
                    id="editDate"
                    placeholder="DATE"
                    required
                  />
                </div>
                <div class="d-flex align-items-center mb-1">
                  <label class="form-label col-4" for="editRealLength"
                    >작업일</label
                  >
                  <input
                    v-model="Form.WORK_DATE"
                    type="text"
                    class="form-control border border-success"
                    id="editRealLength"
                    placeholder="REAL_LENGTH"
                    required
                  />
                </div>
              </div>
              <hr />
              <div class="d-flex align-items-center mb-1">
                <label class="form-label col-4" for="editSupply"
                  >ASSY PART</label
                >
                <input
                  v-model="Form.ASSY_PART_NAME"
                  type="text"
                  class="form-control border border-success"
                  id="editSupply"
                  placeholder="STATE"
                  required
                />
              </div>
              <div class="d-flex align-items-center mb-1">
                <label class="form-label col-4" for="editSupply"
                  >ASSY SUB NAME</label
                >
                <input
                  v-model="Form.ASSY_SUB_PART_NAME"
                  type="text"
                  class="form-control border border-success"
                  id="editSupply"
                  placeholder="STATE"
                  required
                />
              </div>
              <div class="d-flex align-items-center mb-1">
                <label class="form-label col-4" for="editSupply">품명</label>
                <input
                  v-model="Form.JAEDAN_PART_NAME"
                  type="text"
                  class="form-control border border-success"
                  id="editSupply"
                  placeholder="STATE"
                  required
                />
              </div>
              <div class="d-flex align-items-center mb-1">
                <label class="form-label col-4" for="editSupply">품번</label>
                <input
                  v-model="Form.PUMBUN"
                  type="text"
                  class="form-control border border-success"
                  id="editSupply"
                  placeholder="STATE"
                  required
                />
              </div>
              <div class="d-flex align-items-center mb-1">
                <label class="form-label col-4" for="editLotNo">LOT NO</label>
                <input
                  v-model="Form.LOT"
                  type="text"
                  class="form-control border border-success"
                  id="editLotNo"
                  placeholder="LOT_NO"
                  required
                />
              </div>
              <div class="d-flex align-items-center mb-1">
                <label class="form-label col-4" for="editLength">COUNT</label>
                <input
                  v-model="Form.COUNT"
                  type="text"
                  class="form-control border border-success"
                  id="editLength"
                  placeholder="LENGTH"
                  required
                />
              </div>
              <div class="d-flex align-items-center mb-1">
                <label class="form-label col-4" for="editSupply">등록자</label>
                <input
                  v-model="Form.regAccount"
                  type="text"
                  class="form-control border border-success"
                  id="editSupply"
                  placeholder="공급자"
                  required
                />
              </div>
              <div class="d-flex align-items-center mb-1">
                <label class="form-label col-4" for="editSupply">작업자</label>
                <input
                  v-model="Form.updateAccount"
                  type="text"
                  class="form-control border border-success"
                  id="editSupply"
                  placeholder="공급자"
                  required
                />
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button @click="generateReport" type="button" class="btn btn-primary">
            Report
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import html2pdf from "html2pdf.js";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
const Form = ref({
  WORK_DATE: "",
  ASSY_PART_NAME: "",
  ASSY_SUB_PART_NAME: "",
  JAEDAN_PART_NAME: "",
  PUMBUN: "",
  LOT: "",
  COUNT: "",
  regAccount: "",
  updateAccount: "",
});

const generateReport = async () => {
  try {
    // 1. HTML 데이터 생성
    const modalElement = modalRef.value;
    const outerHTML = modalElement.outerHTML;

    // 2. 새 창에 HTML 데이터 렌더링
    const newWindow = window.open("", "_blank");
    newWindow.document.write(outerHTML);
    newWindow.document.close(); // 렌더링 완료 후 닫기

    // 3. 인쇄 대화상자 열기
    newWindow.print();

    // 4. PDF로 출력하고 싶다면 HTML-to-PDF 라이브러리 사용
    if (confirm("PDF로 저장하시겠습니까?")) {
      html2canvas(newWindow.document.body, { useCORS: true }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("report.pdf");
      });
    }
  } catch (error) {
    console.error("Report error:", error);
  }
};
</script>

<style scoped>
@media print {
  /* 인쇄 스타일 정의 */
  body {
    margin: 0;
    padding: 0;
  }
  .modal-content {
    width: 210mm; /* A4 용지 가로 크기 */
    height: 297mm; /* A4 용지 세로 크기 */
    margin: 0 auto;
    padding: 10mm; /* 여백 설정 */
    box-sizing: border-box;
  }
  /* 추가적인 인쇄 스타일 정의 */
  .modal-header,
  .modal-footer {
    background-color: #f4f4f4;
    border-bottom: 1px solid #ddd;
  }

  .modal-title {
    color: blue;
  }

  .form-control {
    margin-bottom: 10px;
  }
  .modal-content {
    font-family: Arial, sans-serif;
    padding: 20px;
  }
  .modal-content {
    font-family: Arial, sans-serif;
    padding: 20px;
  }
}
</style>

import { useBase, createRouter, defineEventHandler } from 'h3';
import * as productCtrl from '~~/server/controller/product';

const router = createRouter();


router.get('/product/getProduct', defineEventHandler(productCtrl.getProduct));
// router.post('/jaedan', defineEventHandler(jaedanCtrl.create));
// router.post('/jaedan', defineEventHandler(jaedanCtrl.create));
// router.get('/defective/getLastData', defineEventHandler(defectiveCtrl.getLastData)); // 추가된 부분
// router.get('/defective/get10', defineEventHandler(defectiveCtrl.get10)); // 추가된 부분
// router.get('/defective/getInsertData', defineEventHandler(defectiveCtrl.getInsertData)); // 추가된 부분
// router.get('/defective/getPart', defineEventHandler(defectiveCtrl.getPart)); // 추가된 부분
// router.get('/defective/getCategory', defineEventHandler(defectiveCtrl.getCategory)); // 추가된 부분
// router.get('/defective/getSubCategory', defineEventHandler(defectiveCtrl.getSubCategory)); // 추가된 부분
// router.get('/defective/getInsertData', defineEventHandler(defectiveCtrl.getInsertData)); // 추가된 부분
// router.get('/defective/getpartCount', defineEventHandler(defectiveCtrl.partCount)); // 추가된 부분
// router.get('/defective/categoryAll', defineEventHandler(defectiveCtrl.categoryAll)); // 추가된 부분
// router.delete('/product/:NO', defineEventHandler(productCtrl.remove));
export default useBase('/api', router.handler);
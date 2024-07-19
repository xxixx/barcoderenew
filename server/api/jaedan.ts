import { useBase, createRouter, defineEventHandler } from 'h3';
import * as jaedanCtrl from '~/server/controller/jaedan';

const router = createRouter();

// router.get('/defective', defineEventHandler(defectiveCtrl.read));
// router.get('/defective/get10', defineEventHandler(defectiveCtrl.read)); // 추가된 부분
router.post('/jaedan', defineEventHandler(jaedanCtrl.register));
router.put('/jaedan/:NO', defineEventHandler(jaedanCtrl.updateState));
router.delete('/jaedan/:NO', defineEventHandler(jaedanCtrl.remove));
// router.get('/defective/:id', defineEventHandler(defectiveCtrl.detail));
// router.put('/defective/:id', defineEventHandler(jaedanCtrl.update));
// router.get('/defective/getAllData', defineEventHandler(defectiveCtrl.getAllData))
// router.delete('/defective/:no', defineEventHandler(defectiveCtrl.remove));

export default useBase('/api', router.handler);
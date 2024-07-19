import { useBase, createRouter, defineEventHandler } from 'h3';
import * as defectiveCtrl from '~~/server/controller/defective';

const router = createRouter();

router.get('/defective', defineEventHandler(defectiveCtrl.read));
router.get('/defective/get10', defineEventHandler(defectiveCtrl.read)); // 추가된 부분
router.post('/defective', defineEventHandler(defectiveCtrl.create));
router.get('/defective/:id', defineEventHandler(defectiveCtrl.detail));
router.put('/defective/:id', defineEventHandler(defectiveCtrl.update));
// router.get('/defective/getAllData', defineEventHandler(defectiveCtrl.getAllData))
// router.delete('/defective/:no', defineEventHandler(defectiveCtrl.remove));

export default useBase('/api', router.handler);
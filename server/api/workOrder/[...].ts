import { useBase, createRouter, defineEventHandler } from 'h3';
import * as workOrderCtrl from '~~/server/controller/workOrder';

const router = createRouter();


router.get('/workOrder/getOrderWithAccount', defineEventHandler(workOrderCtrl.getOrderWithAccount)); // 추가된 부분
router.delete('/workOrder/:NO', defineEventHandler(workOrderCtrl.remove));
router.post('/workOrder/updateState/:NO', defineEventHandler(workOrderCtrl.updateState));
router.get('/workOrder/getOrderWithAccountAll', defineEventHandler(workOrderCtrl.getOrderWithAccountAll)); // 추가된 부분

router.get('/workOrder/getOrder', defineEventHandler(workOrderCtrl.getOrder)); // 추가된 부분
router.get('/workOrder/getRecord10', defineEventHandler(workOrderCtrl.getRecord10)); // 추가된 부분

router.get('/workOrder/getOrder/:NO', defineEventHandler(workOrderCtrl.detail));
router.post('/workOrder', defineEventHandler(workOrderCtrl.registerOrder));
export default useBase('/api', router.handler);
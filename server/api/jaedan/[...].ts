import { useBase, createRouter, defineEventHandler } from 'h3';
import * as jaedanCtrl from '~/server/controller/jaedan';

const router = createRouter();


router.get('/jaedan/getRecord', defineEventHandler(jaedanCtrl.getRecord)); // 추가된 부분
router.get('/jaedan/getRecord10', defineEventHandler(jaedanCtrl.getRecord10)); // 추가된 부분
router.put('/jaedan/:NO', defineEventHandler(jaedanCtrl.updateState));
router.post('/jaedan/updateState/:NO', defineEventHandler(jaedanCtrl.updateState));

// router.post('/jaedan', defineEventHandler(jaedanCtrl.register));
// router.post('/jaedan', defineEventHandler(jaedanCtrl.create));

router.delete('/jaedan/:NO', defineEventHandler(jaedanCtrl.remove));
router.get('/jaedan/:NO', defineEventHandler(jaedanCtrl.getDetail));
router.get('/jaedan/:PD_NAME', defineEventHandler(jaedanCtrl.detail));
export default useBase('/api', router.handler);
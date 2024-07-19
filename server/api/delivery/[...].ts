import { useBase, createRouter, defineEventHandler } from 'h3';
import * as deliveryCtrl from '~~/server/controller/delivery';

const router = createRouter();


router.get('/delivery', defineEventHandler(deliveryCtrl.list)); // 추가된 부분
router.delete('/delivery/:NO', defineEventHandler(deliveryCtrl.remove)); // 추가된 부분
router.post('/delivery', defineEventHandler(deliveryCtrl.create)); // 추가된 부분 추가된 부분

export default useBase('/api', router.handler);
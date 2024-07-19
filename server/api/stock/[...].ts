import { useBase, createRouter, defineEventHandler } from 'h3';
import * as stockCtrl from '~~/server/controller/stock';

const router = createRouter();


router.get('/stock', defineEventHandler(stockCtrl.list)); // 추가된 부분
router.delete('/stock/:NO', defineEventHandler(stockCtrl.remove)); // 추가된 부분
router.post('/stock', defineEventHandler(stockCtrl.create)); // 추가된 부분 추가된 부분

export default useBase('/api', router.handler);
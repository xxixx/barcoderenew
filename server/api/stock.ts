import { useBase, createRouter, defineEventHandler } from 'h3';
import * as stockCtrl from '~~/server/controller/stock';

const router = createRouter();

// 재고 생성 API
router.post('/', defineEventHandler(stockCtrl.create));

// 재고 삭제 API (동적 경로로 NO를 받아서 처리)

// 재고 목록 조회 API
router.get('/', defineEventHandler(stockCtrl.list));
router.delete('/:NO', defineEventHandler(stockCtrl.remove));

export default useBase('/api/stock', router.handler);

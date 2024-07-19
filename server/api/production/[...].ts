import { useBase, createRouter, defineEventHandler } from 'h3';
import * as productionCtrl from '~/server/controller/production';

const router = createRouter();


router.get('/production/getProductionAllData', defineEventHandler(productionCtrl.getProductionAllData)); // 추가된 부분
router.get('/production', defineEventHandler(productionCtrl.getProductionByProcessCode));
router.get('/production/getprocessCode/:processCode', defineEventHandler(productionCtrl.getProductionByProcessCode));
router.put('/production/:processCode', defineEventHandler(productionCtrl.updateLastSerialNumber));
router.get('/production/barcodeCount/:processCode', defineEventHandler(productionCtrl.getBarcodeCount));
router.post('/production/updateState/:NO', defineEventHandler(productionCtrl.updateState));




router.post('/production/register', defineEventHandler(productionCtrl.register));
router.get('/production/getRecord', defineEventHandler(productionCtrl.getRecord)); // 추가된 부분
router.get('/production/getRecord10', defineEventHandler(productionCtrl.getRecord10)); // 추가된 부분
router.put('/production/:NO', defineEventHandler(productionCtrl.updateState));



router.delete('/production/:NO', defineEventHandler(productionCtrl.remove));
router.get('/production/:NO', defineEventHandler(productionCtrl.getDetail));
router.get('/production/:PD_NAME', defineEventHandler(productionCtrl.detail));
export default useBase('/api', router.handler);
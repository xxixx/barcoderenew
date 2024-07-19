import { useBase, createRouter, defineEventHandler } from 'h3';
import * as productsCtrl from '~/server/controller/products';

const router = createRouter();

router.get('/products/getproductsCode/:productsCode', defineEventHandler(productsCtrl.getProductsByProductCode));
router.put('/products/:productsCode', defineEventHandler(productsCtrl.updateLastSerialNumber));
// router.get('/products/getProductionAllData', defineEventHandler(productionCtrl.getProductionAllData)); // 추가된 부분
// router.get('/products', defineEventHandler(productionCtrl.getProductionByProcessCode));
// 
// router.get('/products/barcodeCount/:processCode', defineEventHandler(productionCtrl.getBarcodeCount));
// router.post('/products/updateState/:NO', defineEventHandler(productionCtrl.updateState));




// router.post('/products/register', defineEventHandler(productionCtrl.register));
// router.get('/products/getRecord', defineEventHandler(productionCtrl.getRecord)); // 추가된 부분
// router.get('/products/getRecord10', defineEventHandler(productionCtrl.getRecord10)); // 추가된 부분
// router.put('/products/:NO', defineEventHandler(productionCtrl.updateState));



// router.delete('/products/:NO', defineEventHandler(productionCtrl.remove));
// router.get('/products/:NO', defineEventHandler(productionCtrl.getDetail));
// router.get('/products/:PD_NAME', defineEventHandler(productionCtrl.detail));
export default useBase('/api', router.handler);
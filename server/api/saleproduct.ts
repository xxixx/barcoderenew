import { useBase, createRouter, defineEventHandler } from 'h3';
import * as productCtrl from '~~/server/controller/sale_product';

const router = createRouter();

router.get('/saleproduct', defineEventHandler(productCtrl.list));

export default useBase('/api', router.handler);

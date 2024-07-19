import { useBase, createRouter, defineEventHandler } from 'h3';
import * as workOrderCtrl from '~~/server/controller/workOrder';

const router = createRouter();
router.post('/workOrder', defineEventHandler(workOrderCtrl.registerOrder));

export default useBase('/api', router.handler);
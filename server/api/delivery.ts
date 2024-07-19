import { useBase, createRouter, defineEventHandler } from 'h3';
import * as deliveryCtrl from '~~/server/controller/delivery';

const router = createRouter();

router.post('/', defineEventHandler(deliveryCtrl.create));
router.delete('/:no', defineEventHandler(deliveryCtrl.remove));

router.get('/', defineEventHandler(deliveryCtrl.list));

export default useBase('/api/delivery', router.handler);

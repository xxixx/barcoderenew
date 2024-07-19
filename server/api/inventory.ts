import { useBase, createRouter, defineEventHandler } from 'h3';
import * as inventoryCtrl from '~~/server/controller/inventory';

const router = createRouter();

router.get('/', defineEventHandler(inventoryCtrl.list));

export default useBase('/api/inventory', router.handler);

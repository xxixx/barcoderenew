import { useBase, createRouter, defineEventHandler } from 'h3';
import * as accountCtrl from '~~/server/controller/account/account';

const router = createRouter();

router.get('/getUser', defineEventHandler(accountCtrl.getUser));
router.post('/login', defineEventHandler(accountCtrl.login));
router.post('/logout', defineEventHandler(accountCtrl.logout));
router.get('/refreshToken', defineEventHandler(accountCtrl.refreshToken));
// router.post('/refreshtoken', defineEventHandler(accountCtrl.refreshtoken));

export default useBase('/api/account', router.handler);

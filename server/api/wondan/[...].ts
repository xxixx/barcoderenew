import { useBase, createRouter, defineEventHandler } from 'h3';
import * as wondanCtrl from '~~/server/controller/wondan';

const router = createRouter();


router.get('/wondan/getRecord', defineEventHandler(async (evt) => {
    try {
      const result = await wondanCtrl.getRecord();
  
      return {
        data: result
      };
    } catch (err) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Something went wrong'
      });
    }
  }));

router.get('/wondan/getWondanCode', defineEventHandler(wondanCtrl.getWondanCode));
router.post('/wondan/register', defineEventHandler(wondanCtrl.register));
router.put('/wondan/:NO', defineEventHandler(wondanCtrl.update));
router.delete('/wondan/:NO', defineEventHandler(wondanCtrl.remove));

router.get('/wondan/getUseable', defineEventHandler(wondanCtrl.getUseable));
router.post('/wondan/updateState/:NO', defineEventHandler(wondanCtrl.updateState));

export default useBase('/api', router.handler);
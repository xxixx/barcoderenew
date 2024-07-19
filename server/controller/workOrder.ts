import { H3Event } from 'h3';
// import { Context } from 'nuxt';
// import { Context } from '@nuxt/types';

import * as WorkOrderModel from '~~/server/model/workOrder';


export const getOrder = async () => {
  try {
    const result = await WorkOrderModel.getOrder();

    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    });
  }
};
export const getOrderWithAccount = async () => {
  try {
    const result = await WorkOrderModel.getOrderWithAccount();

    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    });
  }
};
export const getOrderWithAccountAll = async () => {
  try {
    const result = await WorkOrderModel.getOrderWithAccountAll();

    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    });
  }
};
// <<<<<<<<<<<<<<  ✨ Codeium Command 🌟 >>>>>>>>>>>>>>>>
export const registerOrder = async (evt: H3Event) => {
  try {
  console.log('Creating a new worrk order RECORD ');
    const body = await readBody(evt);
    console.log('Got request body', body);
    const result = await WorkOrderModel.registerOrder({
      CREATE_DATE: body.CREATE_DATE,
      WORKING_PART: body.WORKING_PART,
     
     COUNT: body.COUNT,
     REG_ACCOUNT: body.REG_ACCOUNT,
    
    });

    console.log('Created work order post', result);
    return {
      data: result
    };
 } catch (err) {
   console.error('Error creating work order post', err);
};
}

export const updateState = async (evt: H3Event) => {
  try {
    const body = await readBody(evt);
    const NO = body.NO as string;


    const result = await WorkOrderModel.updateState(NO, body.STATE,body.UPDATE_ACCOUNT);

    return {
      data: result
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    });
  }
};
export const getRecord10 = async () => {
  try {
    const result = await WorkOrderModel.getRecord10();

    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    });
  }
};
export const remove = async (evt: H3Event) => {
  try {
    console.log("evt",evt)
    // const params = evt.context.params.no
    const result = await WorkOrderModel.remove(evt.context.params?.NO as string);
    console.log(result)
    return {
      data: result
      
    
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    });
  }
};
export const detail = async (evt: H3Event) => {
  try {
    const NO = evt.context.params?.NO as string; // 대소문자 정확히 맞추기
    const result = await WorkOrderModel.detail(NO);

    return {
      data: result
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    });
  }
};
export const getAllData = async () => {
  try {
    const result = await WorkOrderModel.getAllData();

    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    });
  }
};
export const categoryAll = async () => {
  try {
    const result = await WorkOrderModel.categoryAll();

    return {
      data: result
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    });
  }
};


export const update = async (evt: H3Event) => {
  try {
    const body = await readBody(evt);
    const result = await WorkOrderModel.update(evt.context.params?.no as number, {
      name: body.name,
     no: number, undefined: undefinedy.part
    });

    return {
      data: result
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    });
  }
};

export const remove2 = async (evt: H3Event) => {
  try {
    
    const no = evt.context.params?.no;
    let numNo;

    if (typeof no === 'string') {
      numNo = parseInt(no);
    }

    // const result = await DefectiveModel.remove(numNo?.)?;
    const result = await WorkOrderModel.remove?.(numNo); 
    
    console.log(result);
    return {
      data: result
      
    
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    });
  }
};

export const remove1 = async (evt: H3Event) => {
  try {
    const result = await WorkOrderModel.remove(evt.context.params?.no as unknown);

    return {
      data: result
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    });
  }
};



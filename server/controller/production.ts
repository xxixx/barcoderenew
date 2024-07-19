import { H3Event } from 'h3';
// import { Context } from 'nuxt';
// import { Context } from '@nuxt/types';

import * as ProductionModel from '~~/server/model/production';


export const getProductionAllData = async () => {
  try {
    const result = await ProductionModel.getProductionAllData();

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
export const getRecord = async () => {
  try {
    const result = await ProductionModel.getRecord();

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

export const create = async (evt: H3Event) => {
  try {
    console.log('Creating a new JAEDAN RECORD');
    const body = await readBody(evt);
    console.log('Got request body', body);
    const result = await ProductionModel.register({
      WORK_ORDER_NO: body.WORK_ORDER_NO,
      WONDAN_STORE: body.WONDAN_STORE,
      WONDAN_MANAGER_NO: body.WONDAN_MANAGER_NO,
      LOT: body.LOT,
      Y_COUNT: body.Y_COUNT,
      MARKS: body.MARKS,
      COUNT: body.COUNT,
      DEFECTIVE: body.DEFECTIVE,
      CREATE_DATE: body.CREATE_DATE,
      WORK_DATE: body.WORK_DATE,
    });

    console.log('Created JADAN REGISTER post', result);
    return {
      data: result
    };
  } catch (err) {
    console.error('Error creating JADAN REGISTER post', err);
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    });
  }
};
// export const getProductionByProcessCode = async (event: H3Event) => {
//   const { processCode } = getQuery(event);
//   try {
//     const production = await ProductionModel.getProductionByProcessCode(processCode);
//     if (production) {
//       return {
//         exists: true,
//         lastSerialNumber: production.LAST_SERIAL_NUMBER
//       };
//     } else {
//       return { exists: false };
//     }
//   } catch (err) {
//     throw createError({
//       statusCode: 500,
//       statusMessage: 'Something went wrong'
//     });
//   }
// };
export const getProductionByProcessCode = async (event: H3Event) => {
  const { processCode } = event.context.params;
  try {
    const production = await ProductionModel.getProductionByProcessCode(processCode);
    if (production) {
      return production;
    } else {
      return null;
    }
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    });
  }
};

export const getBarcodeCount = async (event: H3Event) => {
  const processCode = event.context.params.processCode;

  try {
    const result = await ProductionModel.getBarcodeCount(processCode);

    if (result.length === 0) {
      return { barcodeCount: 0 };
    }

    return { barcodeCount: result[0].BARCODE_COUNT };
  } catch (err) {
    console.error('Error fetching barcode count for process code', processCode, err);
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    });
  }
};

export const updateLastSerialNumber = async (event: H3Event) => {
  const { processCode } = event.context.params;
  const { lastSerialNumber } = await readBody(event);
  try {
    await ProductionModel.updateLastSerialNumber(processCode, lastSerialNumber);
    return { success: true };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    });
  }
};

export const register = async (evt: H3Event) => {
  try {
    console.log('Creating a new PRODUCTION RECORD');
    const body = await readBody(evt);
    console.log('Got request body', body);
    
    const result = await ProductionModel.register({
      JAEDAN_NO: body.JAEDAN_NO,
      PROCESS_CODE: body.PROCESS_CODE,
      STATE: body.STATE,
     
    });

    console.log('Created JAEDAN REGISTER post', result);
    return {
      data: result
    };
  } catch (err) {
    console.error('Error creating JAEDAN post', err);
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    });
  }
};
export const updateState = async (evt: H3Event) => {
  try {
    const body = await readBody(evt);
    const NO = body.NO as string;

    // const STATE = body.STATE as number;

    // const data = { STATE };
    const result = await ProductionModel.updateState(NO, body.STATE,body.PD_STATE,body.PD_ACCOUNT,body.PD_DATE);

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

export const getRecord10 = async () => {
  try {
    const result = await ProductionModel.getRecord10();

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


export const getAllData = async () => {
  try {
    const result = await ProductionModel.getAllData();

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
    const result = await DefectiveCategoryModel.categoryAll();

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
export const partCount = async () => {
  try {
    const result = await DefectiveCategoryModel.partCount();

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
export const getPart = async () => {
  try {
    const result = await DefectiveCategoryModel.getPart();

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
export const getCategory = async () => {
  try {
    const result = await DefectiveCategoryModel.getCategory();

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
export const getSubCategory = async () => {
  try {
    const result = await DefectiveCategoryModel.getSubCategory();

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
export const get10 = async () => {
  try {
    const result = await ProductionModel.get10();

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
export const getLastData = async () => {
  try {
    const result = await ProductionModel.getLastData();

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
export const getInsertData = async () => {
  try {
    const result = await ProductionModel.insertData();

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



export const getDetail = async (evt: H3Event) => {
  try {
    const result = await ProductionModel.getDetail(evt.context.params?.NO as string);

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
    const result = await ProductionModel.detail(evt.context.params?.PD_NAME as string);

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

export const update = async (evt: H3Event) => {
  try {
    const body = await readBody(evt);
    const result = await ProductionModel.update(evt.context.params?.no as number, {
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

    // const result = await ProductionModel.remove(numNo?.)?;
    const result = await ProductionModel.remove?.(numNo); 
    
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
export const remove = async (evt: H3Event) => {
  try {
    console.log("evt",evt)
    // const params = evt.context.params.no
    const result = await ProductionModel.remove(evt.context.params?.NO as string);
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
// export const remove = async (evt: H3Event) => {
//   try {
//     console.log("evt",evt)
//     const result = await ProductionModel.remove(evt.context.params?.no as number);
//     console.log(result)
//     return {
//       data: result
      
    
//     };
//   } catch {
//     throw createError({
//       statusCode: 500,
//       statusMessage: 'Something went wrong'
//     });
//   }
// };
export const remove1 = async (evt: H3Event) => {
  try {
    const result = await ProductionModel.remove(evt.context.params?.no as unknown);

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



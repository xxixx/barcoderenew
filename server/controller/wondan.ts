import { H3Event } from 'h3';
import { sql } from '~~/server/db';
// import { Context } from 'nuxt';
// import { Context } from '@nuxt/types';

import * as WondanModel from '~~/server/model/wondan';


export const getWondanCode = async () => {
  try {
    const result = await WondanModel.getWondanCode();

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
    const result = await WondanModel.getRecord();

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

  


export const register = async (evt) => {
  try {
    console.log("Creating a new wondan RECORD");
    const body = await readBody(evt);
    console.log("Got request body", body);

    const result = await WondanModel.register({
      REG_DATE: body.REG_DATE,
      WONDAN_NAME: body.WONDAN_NAME,
      LOT_NO: body.LOT_NO,
      LENGTH: body.LENGTH,
      REAL_LENGTH: body.REAL_LENGTH,
      SUPPLY: body.SUPPLY,
      REG_ACCOUNT: body.REG_ACCOUNT,
      DEFECTIVE_LENGTH: body.DEFECTIVE_LENGTH,
      UPDATE_ACCOUNT: body.UPDATE_ACCOUNT,
    });

    if (result.statusCode === 400 && result.statusMessage === 'LOT_NO already exists') {
      return {
        statusCode: 400,
        statusMessage: 'LOT_NO already exists'
      };
    }

    console.log("Created Wondan REGISTER post", result);
    return {
      data: result,
    };
  } catch (err) {
    console.error("Error creating Wondan post", err);
    throw err;
  }
};

// export const updateState = async (evt: H3Event) => {
//   try {
//     const body = await readBody(evt);
//     const NO = evt.context.params.NO as string;
//     const STATE = body.STATE as number;

//     const data = { STATE };
//     const result = await WondanModel.updateState(NO, data);

//     return {
//       data: result
//     };
//   } catch (err) {
//     throw createError({
//       statusCode: 500,
//       statusMessage: 'Something went wrong'
//     });
//   }
// };
export const update = async (evt: H3Event) => {
  try {
    const body = await readBody(evt);
    const result = await WondanModel.update(evt.context.params?.NO as number, {
      REG_DATE: body.REG_DATE,
      WONDAN_NAME: body.WONDAN_NAME,
      LOT_NO: body.LOT_NO,
      LENGTH: body.LENGTH,
      REAL_LENGTH: body.REAL_LENGTH,
      SUPPLY: body.SUPPLY,
      DEFECTIVE_LENGTH: body.DEFECTIVE_LENGTH,
      STATE: body.STATE,
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
export const updateState = async (evt: H3Event) => {
  try {
    const body = await readBody(evt);
    const NO = body.NO as string;


    const result = await WondanModel.updateState(NO, body.STATE,body.UPDATE_ACCOUNT);

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
    const result = await WondanModel.getRecord10();

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
    const result = await WondanModel.getAllData();

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
export const getUseable = async () => {
  try {
    const result = await WondanModel.getUseable();

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
    const result = await JaedanModel.get10();

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
    const result = await JaedanModel.getLastData();

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
    const result = await JaedanModel.insertData();

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



export const detail = async (evt: H3Event) => {
  try {
    const result = await JaedanModel.detail(evt.context.params?.PD_NAME as string);

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

    // const result = await JaedanModel.remove(numNo?.)?;
    const result = await JaedanModel.remove?.(numNo); 
    
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
    const result = await WondanModel.remove(evt.context.params?.NO as string);
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
//     const result = await JaedanModel.remove(evt.context.params?.no as number);
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
    const result = await WondanModel.remove(evt.context.params?.no as unknown);

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



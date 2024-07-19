import { H3Event } from 'h3';

import * as productModel from '~~/server/model/product';

export const getProduct = async () => {
  try {
    const result = await productModel.getProduct();

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
export const create = async (evt: H3Event) => {
  try {
    console.log('Creating a new blog post');
    const body = await readBody(evt);
    console.log('Got request body', body);
    const result = await productModel.create({
      name: body.name,
      part: body.part
    });

    console.log('Created product post', result);
    return {
      data: result
    };
 } catch (err) {
+    console.error('Error creating product post', err);
// -  } catch {
//     throw createError({
//       statusCode: 500,
//       statusMessage: 'Something went wrong'
//     });
//   }
};
}
// <<<<<<<  8e2948af-5622-4b2b-aaa0-07346e75d753  >>>>>>>

export const detail = async (evt: H3Event) => {
  try {
    const result = await productModel.detail(evt.context.params?.id as string);

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
    const result = await productModel.update(evt.context.params?.id as string, {
      name: body.name,
      part: body.part
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

export const remove = async (evt: H3Event) => {
  try {
    const result = await productModel.remove(evt.context.params?.id as string);

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

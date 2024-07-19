import { H3Event, createError } from 'h3';
import * as ProductModel from '~~/server/model/sale_product';

export const list = async (evt: H3Event) => {
  try {
    const result = await ProductModel.list();
    return { data: result };
  } catch (error) {
    throw createError({ statusCode: 500, statusMessage: 'Something went wrong' });
  }
};

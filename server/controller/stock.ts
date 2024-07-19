import { H3Event } from 'h3';
import * as StockModel from '~~/server/model/stock';

export const create = async (evt: H3Event) => {
  try {
    const body = await readBody(evt);
    const result = await StockModel.create(body);
    return { data: result };
  } catch (err) {
    console.error('Error creating stock:', err);
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    });
  }
};

export const list = async (evt: H3Event) => {
  try {
    const result = await StockModel.list();
    return { data: result };
  } catch (err) {
    console.error('Error fetching stocks:', err);
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    });
  }
};

export const remove = async (evt: H3Event) => {
  try {
    // const NO = evt.context.params?.NO;
    const result = await StockModel.remove(evt.context.params?.NO as string);
    return { data: result };
  } catch (err) {
    console.error('Error removing stock:', err);
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    });
  }
};

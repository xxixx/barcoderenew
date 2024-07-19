import { H3Event } from 'h3';
import * as DeliveryModel from '~~/server/model/delivery';

export const create = async (evt: H3Event) => {
  try {
    const body = await readBody(evt);
    const result = await DeliveryModel.create(body);
    return { data: result };
  } catch (err) {
    console.error('Error creating delivery:', err);
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    });
  }
};

export const list = async (evt: H3Event) => {
  try {
    const result = await DeliveryModel.list();
    return { data: result };
  } catch (err) {
    console.error('Error fetching deliveries:', err);
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    });
  }
};

export const remove = async (evt: H3Event) => {
  try {
    const NO = evt.context.params?.NO;
    const result = await DeliveryModel.remove(NO);
    return { data: result };
  } catch (err) {
    console.error('Error removing delivery:', err);
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    });
  }
};

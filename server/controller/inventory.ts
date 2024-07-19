import { H3Event, createError } from 'h3';
import * as InventoryModel from '~~/server/model/inventory';

export const list = async (evt: H3Event) => {
  try {
    const result = await InventoryModel.list();
    return { data: result };
  } catch (error) {
    throw createError({ statusCode: 500, statusMessage: 'Something went wrong' });
  }
};

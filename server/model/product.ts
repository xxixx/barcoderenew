import { sql } from '~~/server/db';

export type ProductModel =  {
  NO: number;
  PD_NAME: string;
  PRODUCT_NO: string;
  PARTNER: string;
  DESCRIPTION: string;
  MANAGER_CODE: string;
  USE_WONDAN: string;
};

export const getProduct = async () => {
  const result = await sql({
    query: 'SELECT * FROM PRODUCT'
  });

  return result as ProductModel[];
};

export const create = async (data: Pick<ProductModel, 'name' | 'part'>) => {
  const result = (await sql({
    query: `
      INSERT INTO PRODUCT (
        name,
        part
      ) VALUES (
        ?,
        ?
      ) 
    
    `,
    values: [data.name, data.part]
  })) as any;

  return result.length === 1 ? (result[0] as ProductModel) : null;
};

export const detail = async (id: string) => {
  const result = (await sql({
    query: 'SELECT id, name, part, created_date FROM products WHERE id = ?',
    values: [id]
  })) as any;

  return result.length === 1 ? (result[0] as ProductModel) : null;
};

export const update = async (id: string, data: Pick<ProductModel, 'name' | 'part'>) => {
  await sql({
    query: `
      UPDATE products
      SET
        name = ?,
        part = ?
      WHERE id = ?
    `,
    values: [data.name, data.part, id]
  });

  return await detail(id);
};

export const remove = async (id: string) => {
  await sql({
    query: 'DELETE FROM products WHERE id = ?',
    values: [id]
  });

  return true;
};

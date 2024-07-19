import { H3Event } from 'h3';

import * as blogModel from '~~/server/model/blog';

export const read = async () => {
  try {
    const result = await blogModel.read();

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
    const result = await blogModel.create({
      title: body.title,
      content: body.content
    });

    console.log('Created blog post', result);
    return {
      data: result
    };
 } catch (err) {
+    console.error('Error creating blog post', err);
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
    const result = await blogModel.detail(evt.context.params?.id as string);

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
    const result = await blogModel.update(evt.context.params?.id as string, {
      title: body.title,
      content: body.content
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
    const result = await blogModel.remove(evt.context.params?.id as string);

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

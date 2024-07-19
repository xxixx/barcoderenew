import { sql,transaction } from '~~/server/db';
export type ScannedBarcodeModel = {
    NO: any;
    BARCODE: any;
    CREATE_DATE: any;
    PROCESS_CODE: any;
    
  };

  // export const saveScannedBarcode = async (data: Pick<ScannedBarcodeModel, 'BARCODE' | 'CREATE_DATE' | 'PROCESS_CODE'>) => {
  //   try {
  //     await sql.transaction(async (tx) => {
  //       const insertResult = await tx.query('INSERT INTO SCANNED_BARCODE (BARCODE, CREATE_DATE, PROCESS_CODE) VALUES (?, ?, ?)', [data.BARCODE, data.CREATE_DATE, data.PROCESS_CODE]);
  
  //       if (insertResult.affectedRows === 0) {
  //         throw new Error('바코드 등록에 실패했습니다.');
  //       }
  
  //       const updateResult = await tx.query('INSERT INTO PROCESS_BARCODE_COUNT (PROCESS_CODE, BARCODE_COUNT) VALUES (?, 1) ON DUPLICATE KEY UPDATE BARCODE_COUNT = BARCODE_COUNT + 1', [data.PROCESS_CODE]);
  
  //       if (updateResult.affectedRows === 0) {
  //         throw new Error('PROCESS_BARCODE_COUNT 업데이트에 실패했습니다.');
  //       }
  //     });
  
  //     return { success: true };
  //   } catch (err) {
  //     console.error('Error saving scanned barcode:', err);
  //     return { error: err.message };
  //   }
  // };
  export const saveScannedBarcode = async (data: Pick<ScannedBarcodeModel, 'BARCODE' | 'CREATE_DATE' | 'PROCESS_CODE'>) => {
    try {
      const result = await transaction(async (connection) => {
        const insertResult = await connection.query('INSERT INTO SCANNED_BARCODE (BARCODE, CREATE_DATE, PROCESS_CODE) VALUES (?, ?, ?)', [data.BARCODE, data.CREATE_DATE, data.PROCESS_CODE]);
  
        if (insertResult[0].affectedRows === 0) {
          throw new Error('바코드 등록에 실패했습니다.');
        }
  
        const updateResult = await connection.query('INSERT INTO PROCESS_BARCODE_COUNT (PROCESS_CODE, BARCODE_COUNT) VALUES (?, 1) ON DUPLICATE KEY UPDATE BARCODE_COUNT = BARCODE_COUNT + 1', [data.PROCESS_CODE]);
  
        if (updateResult[0].affectedRows === 0) {
          throw new Error('PROCESS_BARCODE_COUNT 업데이트에 실패했습니다.');
        }
  
        return { success: true };
      });
  
      return result;
    } catch (err) {
      console.error('Error saving scanned barcode:', err);
      return { error: err.message };
    }
  };
  
  export const saveScannedBarcodes = async (evt: H3Event) => {
    try {
      const body = await readBody(evt);
      const result = await sql.transaction(async (tx) => {
        const queries = body.barcodes.map(barcode => {
          return tx.query('INSERT INTO SCANNED_BARCODE (BARCODE, CREATE_DATE, PROCESS_CODE) VALUES (?, ?, ?)', [barcode, body.date, body.processCode]);
        });
  
        const insertResults = await Promise.all(queries);
        const failedInserts = insertResults.filter(result => result.affectedRows === 0);
  
        if (failedInserts.length > 0) {
          return { error: '일부 바코드 등록에 실패했습니다.' };
        }
  
        const updateResult = await tx.query('INSERT INTO PROCESS_BARCODE_COUNT (PROCESS_CODE, BARCODE_COUNT) VALUES (?, ?) ON DUPLICATE KEY UPDATE BARCODE_COUNT = BARCODE_COUNT + ?', [body.processCode, body.barcodes.length, body.barcodes.length]);
  
        if (updateResult.affectedRows === 0) {
          return { error: 'PROCESS_BARCODE_COUNT 업데이트에 실패했습니다.' };
        }
  
        return { success: true };
      });
  
      return result;
    } catch (err) {
      console.error('Error creating saveScannedBarcodes posts', err);
      throw createError({
        statusCode: 500,
        statusMessage: 'Something went wrong'
      });
    }
  };
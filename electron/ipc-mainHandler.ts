import { ipcMain } from 'electron';
import Connection from '../utilities/db';

const setupIPC = () => {
  ipcMain.handle('get-products', async () => {
    try {
      const [rows] = await Connection.query('SELECT * FROM products');
      return rows;
    } catch (error) {
      return { error: (error as Error).message };
    }
  });
  ipcMain.handle('search-products', async (args) => {
    try {
      const [rows] = await Connection.query(
        'SELECT * FROM products WHERE kode = ? OR nama = ?',
        [args, args]
      );
      return rows;
    } catch (error) {
      return { error: (error as Error).message };
    }
  });
};

export default setupIPC;

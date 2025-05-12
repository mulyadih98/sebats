import { createPool } from 'mysql2';

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_sebats',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const Connection = pool.promise();

export const testConnection = async () => {
  try {
    const [rows] = await Connection.query('SELECT NOW() AS currentTime');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const row = rows as any[];
    console.log('Koneksi pool berhasil. Waktu server:', row[0].currentTime);
  } catch (error) {
    console.log('Gagal konek via pool:', (error as Error).message);
  }
};

export default Connection;

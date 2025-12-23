import pool from './db.js';

(async () => {
  try {
    await pool.query('SELECT 1');
    console.log(' Conectado ao MySQL');
    process.exit(0);
  } catch (err) {
    console.error('Erro ao conectar no MySQL:', err.message);
    process.exit(1);
  }
})();

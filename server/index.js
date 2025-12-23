import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import peopleRoutes from './routes/peopleRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use('/api', peopleRoutes);

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'API is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

import express from 'express';
import cors from 'cors';
import { connectDatabase } from './database/connect';
import { BlogRoutes } from './routes';

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
const PORT = process.env.PORT;

connectDatabase();

app.use('/blogs', BlogRoutes);

app.listen(PORT, () => {
  console.log(`Server is now listening on PORT: ${PORT}`);
});

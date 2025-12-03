import express from 'express';
import { connectDatabase } from './database/connect';
import { BlogRoutes } from './routes';

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

connectDatabase();

app.use('/blogs', BlogRoutes);

app.listen(PORT, () => {
  console.log(`Server is now listening on PORT: ${PORT}`);
});

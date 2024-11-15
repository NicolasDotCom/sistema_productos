import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { productosRouter } from './routes/productos.js';

config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/productos', productosRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
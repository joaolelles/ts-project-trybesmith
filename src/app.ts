import express from 'express';
import productRoutes from './Routes/product.routes';
import userRoutes from './Routes/user.routes';
import orderRoutes from './Routes/order.routes';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);

export default app;

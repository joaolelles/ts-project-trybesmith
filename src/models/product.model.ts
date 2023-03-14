import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Product } from '../interfaces/product';

const registerProduct = async (product: Product): Promise<Product> => {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  return { id: insertId, ...product };
};

export default { 
  registerProduct,
};

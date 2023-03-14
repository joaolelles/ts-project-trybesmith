import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { Product, Order } from '../interfaces/product';

const registerProduct = async (product: Product): Promise<Product> => {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  return { id: insertId, ...product };
};

const getAll = async (): Promise<Order[]> => {
  const query = 'SELECT * FROM Trybesmith.products';
  const [result] = await connection.execute<RowDataPacket[] & Order[]>(query);
  return result;
};

export default { 
  registerProduct,
  getAll,
};

import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { Product, OrderP } from '../interfaces/product';

const registerProduct = async (product: Product): Promise<Product> => {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  return { id: insertId, ...product };
};

const getAll = async (): Promise<OrderP[]> => {
  const query = 'SELECT * FROM Trybesmith.products';
  const [result] = await connection.execute<RowDataPacket[] & OrderP[]>(query);
  return result;
};

const updateOrderId = async (order:number, e:number) => {
  await connection.execute('UPDATE Trybesmith.products SET order_id= ?  WHERE id = ?', [order, e]);
};

export default { 
  registerProduct,
  getAll,
  updateOrderId,
};

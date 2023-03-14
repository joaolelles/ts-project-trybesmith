import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { Order } from '../interfaces/order';

const getAll = async (): Promise<Order[]> => {
  const query = `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
  FROM Trybesmith.orders AS o INNER JOIN Trybesmith.products AS p 
  ON o.id = p.order_id
  GROUP BY o.id;`;
  const [result] = await connection.execute<RowDataPacket[] & Order[]>(query);
  return result;
};

export default { 
  getAll,
};
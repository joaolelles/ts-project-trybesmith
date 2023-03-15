import { RowDataPacket, ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Order } from '../interfaces/order';
import { OrderP } from '../interfaces/product';
import { User } from '../interfaces/users';

const getAll = async (): Promise<Order[]> => {
  const query = `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
  FROM Trybesmith.orders AS o INNER JOIN Trybesmith.products AS p 
  ON o.id = p.order_id
  GROUP BY o.id;`;
  const [result] = await connection.execute<RowDataPacket[] & Order[]>(query);
  return result;
};

const registerOrder = async (user: User, orderP: OrderP) => {
  const { id } = user;
  const { orderId } = orderP;
  // orderId de produts é o id da tabela orders e o userId da tabela orders é o id da tabela users
  await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (id, user_id) VALUES (?, ?)',
    [orderId, id],
  );
};

// `INSERT INTO o.productsIds, p.orderId (productsIds) VALUES (?, ?)
//     FROM Trybesmith.orders AS o INNER JOIN Trybesmith.products AS p
//     ON o.productsIds = p.orderId
//     GROUP BY o.productsIds;`,

const registerOrderP = async (order: number, orderP: OrderP) => {
  const { orderId } = orderP;
  await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.products (orderId) VALUES (?)
    WHERE id = ?
    `,
    [orderId, order], 
  );
};

export default { 
  getAll,
  registerOrder,
  registerOrderP,
};
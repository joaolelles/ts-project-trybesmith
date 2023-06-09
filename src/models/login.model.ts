import { RowDataPacket } from 'mysql2';
import { Login } from '../interfaces/login';
import { User } from '../interfaces/users';
import connection from './connection';

const userLogin = async (login: Login): Promise<User[]> => {
  const { username, password } = login;

  const [rows] = await connection.execute<RowDataPacket[] & Login[]>(
    `
    SELECT username, password FROM Trybesmith.users WHERE username = ? AND password = ?;
  `,
    [username, password],
  );
  return rows as User[];
};

export default {
  userLogin,
};
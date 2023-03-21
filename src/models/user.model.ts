import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { User } from '../interfaces/users';

const registerUser = async (user: User) => {
  const { username, vocation, level, password } = user;
  await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
};

const getId = async (user: string) => {
  const userId = await connection.execute<RowDataPacket[]>(
    'SELECT id FROM Trybesmith.users WHERE username = ?',
    [user],
  );
  return userId;
};

export default { 
  registerUser,
  getId,
};
export type User = {
  id: string;
  username: string;
  role: 'user' | 'admin';
  password: string;
};

const users: User[] = [
  { id: '1', username: 'user-1', password: 'pass', role: 'user' },
  { id: '1', username: 'user-2', password: 'pass', role: 'user' },
  { id: '2', username: 'user-3', password: 'pass', role: 'admin' },
];
export { users };

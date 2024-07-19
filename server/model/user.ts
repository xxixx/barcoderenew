import type { User } from '~/types/user';
const users: User[] = [
  {
    id: 'Tera',
    email: 'admin@email.com',
    password: '1111',
    roles: ['ADMIN'],
  },
  {
    id: 'test',
    email: 'user@gmail.com',
    password: '1111',
    roles: ['USER'],
  },
];
export function getUserByEmail(email : string){
  return users.find((user) =>user.email === email)

}
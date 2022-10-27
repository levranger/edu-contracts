import { UserInterface } from './index';

export interface LoginResponseInterface {
  access_token: string;
  user: UserInterface;
}

import { PostModel } from './PostModel';

export class UserModel {
  public id: number;
  public email: string;
  public password: string;
  public token: string;
  public name: string;
  public foto: string;
  public post: PostModel[];
}

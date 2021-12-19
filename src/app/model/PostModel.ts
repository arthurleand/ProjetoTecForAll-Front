import { ThemeModel } from './ThemeModel';
import { UserModel } from './UserModel';

export class PostModel {
  public idPost: number;
  public title: string;
  public descriptionPost: string;
  public archive: string;
  public picture: string;
  public date: Date;
  public fkTheme: ThemeModel;
  public fkUser: UserModel;
}

import { PostModel } from './PostModel';

export class ThemeModel {
  public idTheme: number;
  public name: string;
  public descriptionTheme: string;
  public post: PostModel[];
}

import { PostModel } from './PostModel';

export class ThemeModel {
  public idTheme: string;
  public name: string;
  public descriptionTheme: string;
  public post: PostModel[];
}

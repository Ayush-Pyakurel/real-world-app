import { Article } from './article.interface';
import { Author } from './author.interface';

export interface Welcome {
  articles: Article[];
  articlesCount: number;
  author: Author;
}

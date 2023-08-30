import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Article } from './article.interface';

@Injectable()
export class NewsService {
  async getNews(movieName: string) {
    const apiKey = process.env.NEWS_API_KEY;
    const response = await fetch(`https://newsapi.org/v2/everything?q=${movieName}&apiKey=${apiKey}`);
    if (!response.ok) {throw new InternalServerErrorException('There was an error retrieving the movie news. Please try again later.');}
    const data = await response.json();
    let articles = data['articles'];
    const processed = this.processArticles(articles);
    return processed;
  }

  processArticles(articles: Array<Article>) {
    if (articles.length > 5) {articles = articles.slice(0, 5);}
    const processed = articles.map((article: Article) => {
      return {
        url: article.url,
        title: article.title,
        description: article.description,
      }
    });
    return processed;
  }
}

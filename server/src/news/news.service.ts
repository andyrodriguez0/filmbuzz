import { Injectable } from '@nestjs/common';

const apiKey = '4b53830bbcc2410faec8ebfdbd8fb295';

@Injectable()
export class NewsService {
  async getMovieNews(movieName: string) {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${movieName}&apiKey=${apiKey}`);
    const data = await response.json();
    let articles = data['articles'];
    if (articles.length > 5) {
      articles = articles.slice(0, 5);
    }
    return articles;
  }
}

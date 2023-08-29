import { Controller, Get, Param } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private newsService: NewsService) {}

  @Get('/about-movie/:movieName')
  getMovieNews(@Param('movieName') movieName: string) {
    return this.newsService.getMovieNews(movieName);
  }
}

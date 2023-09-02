import { Controller, Get, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get('/popular')
  getPopular() {
    return this.moviesService.getPopular();
  };

  @Get('/search')
  getSearch(@Query('query') query: string) {
    return this.moviesService.getSearch(query);
  }
}

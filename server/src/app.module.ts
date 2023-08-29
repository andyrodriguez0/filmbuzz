import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { NewsModule } from './news/news.module';

@Module({
  imports: [MoviesModule, NewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

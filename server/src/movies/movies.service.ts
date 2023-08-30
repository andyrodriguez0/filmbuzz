import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Result  } from './result.interface';

@Injectable()
export class MoviesService {
  async getPopular() {
    const apiKey = process.env.MOVIES_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    const response = await fetch(url);
    if (!response.ok) {throw new InternalServerErrorException('There was an error retrieving the popular movies. Please try again later.');}
    const data = await response.json();
    const results = data['results'];
    const processed = this.processResults(results);
    return processed;
  }

  async getSearch(query: string) {
    const apiKey = process.env.MOVIES_API_KEY;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US&page=1`;
    const response = await fetch(url);
    if (!response.ok) {throw new InternalServerErrorException('There was an error searching for the movies. Please try again later.');}
    const data = await response.json();
    const results = data['results'];
    const processed = this.processResults(results);
    return processed;
  }

  processResults(results: Array<Result>) {
    const processed = results.map((result: Result) => {
      return {
        movieId: result.id,
        title: result.title,
        releaseDate: result.release_date,
        posterImage: result.poster_path,
        description: result.overview,
        averageRating: result.vote_average
      }
    });
    return processed;
  }
}

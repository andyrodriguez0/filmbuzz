import { Injectable } from '@nestjs/common';

const apiKey = '855a13a8bd82d244b0f38aad5fea55ca';

@Injectable()
export class MoviesService {
  async getPopular() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    return data['results'];
  }

  async getSearch(query: string) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    return data['results'];
  }
}

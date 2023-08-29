import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FavoritesService } from './favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private favoritesService: FavoritesService) {};

  @Post('/create')
  createFavorite(@Body() data: { movieId: number, releaseDate: string, posterImage: string, description: string, averageRating: number }) {
    return this.favoritesService.createFavorite(data);
  }

  @Get()
  getFavorites() {
    return this.favoritesService.getFavorites();
  }

  @Post('/delete/:id')
  deleteFavorite(@Param('id') id: string) {
    return this.favoritesService.deleteFavorite(parseInt(id));
  }
}

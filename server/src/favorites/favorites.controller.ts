import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { FavoriteDto } from './favorite.dto';

@Controller('favorites')
export class FavoritesController {
  constructor(private favoritesService: FavoritesService) {};

  @Post('/create')
  createFavorite(@Body() body: FavoriteDto) {
    return this.favoritesService.createFavorite(body);
  }

  @Get()
  getFavorites() {
    return this.favoritesService.getFavorites();
  }

  @Post('/delete/:movieId')
  deleteFavorite(@Param('movieId') movieId: string) {
    return this.favoritesService.deleteFavorite(parseInt(movieId));
  }
}

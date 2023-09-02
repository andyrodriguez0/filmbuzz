import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class FavoritesService {
  constructor(private prisma: PrismaService) {}

  async createFavorite(body: Prisma.favoritesCreateInput) {
    try {
      const favorite = await this.prisma.favorites.create({data: body});
      return favorite;
    } catch (error) {
      throw new InternalServerErrorException('There was an error creating the favorite')
    }
  }

  async getFavorites() {
    return await this.prisma.favorites.findMany({});
  }

  async deleteFavorite(movieId: number) {
    try {
      const favorite = await this.prisma.favorites.delete({where: {movieId}});
      return favorite;
    } catch (error) {
      throw new InternalServerErrorException('There was an error deleting the favorite')
    } 
  }
}

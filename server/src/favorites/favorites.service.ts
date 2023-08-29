import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class FavoritesService {
  constructor(private prisma: PrismaService) {}

  async createFavorite(data: Prisma.favoritesCreateInput) {
    return this.prisma.favorites.create({data});
  }

  async getFavorites() {
    return this.prisma.favorites.findMany({});
  }

  async deleteFavorite(id: number) {
    return this.prisma.favorites.delete({where: {id}});
  }
}

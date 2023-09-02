import { IsNumber, IsString } from "class-validator";

export class FavoriteDto {
  @IsString()
  title: string;

  @IsNumber()
  movieId: number;

  @IsString()
  releaseDate: string;

  @IsString()
  posterImage: string;
  
  @IsString()
  description: string;
  
  @IsNumber()
  averageRating: number;
}

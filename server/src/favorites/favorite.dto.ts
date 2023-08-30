import { IsNumber, IsString } from "class-validator";

export class FavoriteDto {
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

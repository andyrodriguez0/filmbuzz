-- CreateTable
CREATE TABLE "favorites" (
    "id" SERIAL NOT NULL,
    "movieId" INTEGER,
    "releaseDate" VARCHAR,
    "posterImage" VARCHAR,
    "description" VARCHAR,
    "averageRating" VARCHAR,

    CONSTRAINT "favorites_pkey" PRIMARY KEY ("id")
);

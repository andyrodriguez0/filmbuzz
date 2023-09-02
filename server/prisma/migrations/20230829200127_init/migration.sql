-- CreateTable
CREATE TABLE "favorites" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR,
    "movieId" INTEGER,
    "releaseDate" VARCHAR,
    "posterImage" VARCHAR,
    "description" VARCHAR,
    "averageRating" DOUBLE PRECISION,

    CONSTRAINT "favorites_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "favorites_movieId_key" ON "favorites"("movieId");

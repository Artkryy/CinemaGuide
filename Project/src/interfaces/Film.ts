export interface Film {
  id: number;
  title: string;
  originalTitle: string;
  language: string;
  releaseYear: number;
  releaseDate: Date;
  genres: [];
  plot: string;
  runtime: number;
  budget: string;
  revenue: string;
  homepage: string;
  status: string;
  posterUrl: string;
  backdropUrl: string;
  trailerUrl: string;
  trailerYoutubeId: string;
  tmdbRating: number;
  searchL: string;
  keywords: [];
  countriesOfOrigin: [];
  languages: [];
  cast: [];
  director: string;
  production: string;
  awardsSummary: string;
}

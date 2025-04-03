export interface IMovie {
    adult?: boolean
    backdrop_path: string
    genres: Array<{ id: number; name: string }> | Array<any>
    genre_ids: Array<number>
    homepage: string
    id: number
    original_language: string
    original_title: string
    original_name?: string
    origin_country?: Array<number>
    overview: string
    popularity: string | number
    poster_path: string
    production_companies: Array<{ id: number; name: string }> | Array<any>
    release_date?: string
    first_air_date?: string
    tagline?: string
    title?: string
    name?: string
    runtime?: number
    status?: string
    video?: boolean
    vote_average: string | number
    vote_count: number
    credits?: {
        cast: Array<{ id: number; name: string }> | Array<any>
        crew: Array<{ id: number; name: string }> | Array<any>
    }
  }

//   https://github.com/ionivetech/movie-app/blob/main/src/interfaces/IMovie.ts

export interface IReview {
    author: string
    author_details: {
        avatar_path: string | null
        name: string
        rating: number
        username: string
    }
    content: string
    created_at: string
    id: string
    url: string
    read_more: boolean
}
export type IReviews = IReview[]

export interface ReviewsApiResponse {
    page: number;
    results: IReviews;
    total_pages: number;
    total_results: number;
  }

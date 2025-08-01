import { useState, useEffect } from "react";
import { useReviews } from "../../../../hooks/useMovies";
import { IReview } from "../../../../interfaces/IReviews";
import { useMoviesStore } from "../../../../config/store/store";

export const useReview = (type: string, id: number) => {
  const [localReviews, setLocalReviews] = useState<IReview[]>([]);
  const { language } = useMoviesStore();
  const { data: reviews } = useReviews(type, id, language);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!reviews) return;
    setLocalReviews(
      reviews.results.map((review: IReview) => {
        review.read_more = false;
        return review;
      })
    );
  }, [reviews]);

  const handleReadMore = (id: string) => {
    const updateData = localReviews.map((review: IReview) => {
      if (review.id === id) {
        return {
          ...review,
          read_more: !review.read_more,
        };
      }
      return review;
    });

    setLocalReviews(updateData);
  };

  return {
    localReviews,
    handleReadMore,
    language,
    loading
  };
};
  
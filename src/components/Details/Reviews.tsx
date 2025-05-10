import { StarIcon } from "@heroicons/react/20/solid";
import { useMoviesStore } from "../../config/store/store";
import { useReviews } from "../../hooks/useMovies";
import { IReview } from "../../interfaces/IReviews";
import { formatDate } from "../../utils/filters";

import { useEffect, useState } from "react";

type ReviewsPropsType = {
  id: number;
  type: string;
};

export const Reviews = ({ id, type }: ReviewsPropsType) => {
  const [localReviews, setLocalReviews] = useState<IReview[]>([]);
  const { data: reviews } = useReviews(type, id);
  const { language } = useMoviesStore();
  useEffect(() => {
    if (!reviews) return;
    setLocalReviews(
      reviews.results.map((review: IReview) => {
        review.read_more = false;
        //añadimos al objeto de la review read_more para controlar el button Read More
        return review;
      })
    );
  }, [reviews]);
  if (!reviews) return null;

  const userLang = language || "es-ES";

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
  return (
    <>
      {localReviews.map((review: IReview) => (
        <div
          key={review.id}
          className="text-left w-full flex flex-col mb-5 last:mb-0 pb-5 last:pb-0 space-y-3 border-b last:border-b-0 dark:border-slate-400 dark:border-opacity-20 border-slate-300"
        >
          <div className="flex items-center justify-between">
            <div className="flex mb-4 items-center">
              <img
                width={50}
                height={50}
                src={`https://api.dicebear.com/6.x/bottts/svg?seed=${review.author}`}
                alt=""
              />

              <div className="flex flex-col ml-2">
                <p>
                  <strong>{review.author}</strong>
                </p>
                <p className="text-xs opacity-65">
                  {formatDate(review.created_at, userLang)}
                </p>
              </div>
            </div>
            <div className="flex space-x-1">
              <StarIcon
                width={"20px"}
                height={"20px"}
                style={{ color: "#EFCE4A" }}
              />
              <p>{review.author_details.rating} </p>
            </div>
          </div>
          {/* <p className="font-normal text-sm md:text-base  text-slate-950 dark:text-slate-100 md:leading-loose leading-relaxed ">
            {review.content}
          </p> */}

          {review.content.length > 300 && (
            <>
              <p className="font-normal md:text-base text-sm text-slate-950 dark:text-slate-100 md:leading-loose leading-relaxed">
                {review.read_more
                  ? review.content
                  : `${review.content.slice(0, 299)}...`}
              </p>
              <button className="text-blue-500 text-left font-medium text-sm" onClick={() => handleReadMore(review.id)}>
                {review.read_more ? "Read Less" : "Read More"}
              </button>
            </>
          )}
          {review.content.length <= 300 && (
            <p className="font-normal md:text-base text-sm text-slate-950 dark:text-slate-100 md:leading-loose leading-relaxed">
              {review.content}
            </p>
          )}
        </div>
      ))}
    </>
  );
};

// src={`https://api.dicebear.com/6.x/bottts/svg?seed=${review.author}`}

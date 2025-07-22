import { StarIcon } from "@heroicons/react/20/solid";
import { IReview } from "../../../interfaces/IReviews";
import { formatDate } from "../../../utils/filters";
import { useTranslation } from "react-i18next";
import { useReview } from "./hooks/useReview";
import ReviewsSkeleton from "../../Skeleton/ReviewsSkeleton";

type ReviewsPropsType = {
  id: number;
  type: string;
};

export const Reviews = ({ id, type }: ReviewsPropsType) => {
  const { t } = useTranslation();
  const { localReviews, handleReadMore, language, loading } = useReview(type, id);
console.log(localReviews)
  if (loading) return <ReviewsSkeleton />;

  return (
    <>
      {!localReviews.length ? (
        <div
          className="w-full h-full flex items-center justify-center min-h-[200px]"
          role="alert"
          aria-live="assertive"
        >
          <p className="text-2xl font-bold text-center text-neutral-500" aria-label={t("reviewsMessage")}>
            {t("reviewsMessage")}
          </p>
        </div>
      ) : (
        <>
          {localReviews?.map((review: IReview) => (
            <div
              key={review.id}
              className="m-auto max-w-[1000px] text-left w-full flex flex-col mb-5 last:mb-0 pb-5 last:pb-0 space-y-3 border-b last:border-b-0 dark:border-slate-400 dark:border-opacity-20 border-slate-300"
              role="article"
              aria-labelledby={`review-${review.id}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex mb-4 items-center">
                  <img
                    width={50}
                    height={50}
                    src={`https://api.dicebear.com/6.x/bottts/svg?seed=${review.author}`}
                    alt={`Avatar de ${review.author}`}
                  />
                  <div className="flex flex-col ml-2">
                    <p id={`review-${review.id}`} className="font-bold">
                      {review.author}
                    </p>
                    <p className="text-xs opacity-65">
                      {formatDate(review.created_at, language)}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <StarIcon
                    width={"20px"}
                    height={"20px"}
                    style={{ color: "#EFCE4A" }}
                  />
                  <p>{review.author_details.rating}</p>
                </div>
              </div>
          
              {review.content.length > 300 && (
                <>
                  <p className="font-normal md:text-base text-sm text-slate-950 dark:text-slate-100 md:leading-loose leading-relaxed">
                    {review.read_more
                      ? review.content
                      : `${review.content.slice(0, 299)}...`}
                  </p>
                  <button
                    className="text-blue-500 text-left font-medium text-sm"
                    onClick={() => handleReadMore(review.id)}
                    aria-expanded={review.read_more}
                    aria-controls={`review-content-${review.id}`}
                  >
                    {review.read_more ? t('readLess') : t('readMore')}
                  </button>
                </>
              )}
              {review.content.length <= 300 && (
                <p
                  id={`review-content-${review.id}`}
                  className="font-normal md:text-base text-sm text-slate-950 dark:text-slate-100 md:leading-loose leading-relaxed"
                >
                  {review.content}
                </p>
              )}
            </div>
          ))}
        </>
      )}
    </>
  );
};


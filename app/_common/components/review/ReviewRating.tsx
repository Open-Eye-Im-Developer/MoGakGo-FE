import RatingItem from "./RatingItem";

const Ratings = [
  {
    type: "sad-dizzy",
    content: "최악이에요",
  },
  {
    type: "sad",
    content: "별로에요",
  },
  {
    type: "smile",
    content: "보통이에요",
  },
  {
    type: "happy",
    content: "좋아요",
  },
  {
    type: "xd",
    content: "최고에요",
  },
] as const;

function ReviewRating() {
  return (
    <ul className="flex w-full justify-center gap-5 py-5">
      {Ratings.map(({ type, content }, index) => (
        <>
          <RatingItem key={index} content={content} type={type} />
        </>
      ))}
    </ul>
  );
}

export default ReviewRating;

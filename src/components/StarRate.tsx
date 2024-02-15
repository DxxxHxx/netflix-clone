import StarRatings from "react-star-ratings";

export default function StarRate({ rate }: { rate: number }) {
  return (
    <StarRatings
      rating={rate}
      starRatedColor="gold"
      numberOfStars={5}
      name="rating"
      starDimension="25px"
      starSpacing="2px"
    />
  );
}

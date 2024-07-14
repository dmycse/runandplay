import ReviewCard from "../components/ReviewCard/ReviewCard";
import { reviews } from "../constans";

export default function CustomerReviews() {
  return (
    <div className='max-container'>
      <h3 className='mb-4 font-palanquin text-4xl text-center font-bold'>
        What Our{' '}
        <span className='text-coral-red'>Customers</span>
        {' '}Say?
      </h3>
      <p className='mb-24 m-auto max-w-lg text-center info-text'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className='flex justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </div>
  );
}

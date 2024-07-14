import { star } from "../../assets/icons";

export default function ReviewCard({ imgURL, customerName, rating, feedback }) {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img
        src={imgURL}
        alt='customer'
        width={120}
        height={120}
        className='rounded-full object-cover'
      />
      <p className='mt-6 mb-3 max-w-sm text-center info-text'>{feedback}</p>
      <div className='mb-1 flex justify-center items-center gap-2.5'>
        <img
          src={star}
          width={24}
          height={24}
          alt='rating star'
          className='object-contain m-0'
        />
        <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
      </div>
      <h3 className='font-palanquin text-3xl text-center font-bold'>
        {customerName}
      </h3>
    </div>
  )
}

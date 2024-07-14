import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button/Button";


export default function SpecialOffers() {
  return (
    <div className='max-container flex justify-between items-center max-xl:flex-col-reverse gap-10'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='w-full object-contain'
        />
      </div>
      <div className='flex-1 self-start xl:pt-14 flex flex-col'>
        <h2 className='mb-4 text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Special</span>
          {' '}Offer
        </h2>
        <p className='mb-6 info-text'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='mb-11 info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconUrl={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </div>
  )
}

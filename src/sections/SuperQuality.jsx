import Button from "../components/Button/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

export default function SuperQuality() {
  return (
    <div
      id="about-us"
      className='max-container w-full flex justify-between items-center max-lg:flex-col gap-10'
    >
      <div className="flex-1 flex flex-col">
        <h2 className="mb-4 lg:max-w-lg font-palanquin capitalize text-4xl font-bold">
          we provide you
          <br />
          <span className="text-coral-red">super </span>
          <span className="text-coral-red">quality </span>
          {''}shoes
        </h2>
        <p className="mb-11 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <div>
          <Button label="View details" />
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </div>
  )
}

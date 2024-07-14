import Button from "../components/Button/Button";
import ShoeCard from "../components/ShoeCard/ShoeCard";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constans";
import { bigShoe1 } from "../assets/images";
import { useState } from "react";


export default function Hero() {

  let [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <div 
      id="home"
      className="max-container w-full min-h-screen flex flex-col xl:flex-row justify-center gap-10"
    >
      <div className="relative pt-40 w-full xl:w-[45%] max-xl:padding-x flex flex-col justify-center items-start">
        <p className="text-xl font-montserrat text-coral-red">
          Our summer collection
        </p>
        <h1 className="mt-8 font-palanquin text-8xl max-sm:text-[72px]  max-sm:leading-[82px] font-bold">
          <span className="relative z-10 pr-10 xl:bg-white xl:whitespace-nowrap">The New Arrival</span>
          <br />
          <span className="mt-3 inline-block text-coral-red">City</span>
          {' '}Sneakers
        </h1>
        <p className="mt-6 mb-8 font-montserrat text-lg text-slate-gray leading-8 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconUrl={ arrowRight }/>
        <div className="w-full mt-8 flex justify-start items-start gap-16 max-sm:hidden">
          {statistics.map(stat => (
            <div key={stat.label} className="">
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      {/* sm:min-h-screen */}
      <div className="relative flex-1 flex justify-center items-start 
                        max-xl:pt-14 bg-primary bg-hero bg-cover">
        <img src={bigShoeImg} alt="shoe collection" className="relative mb-20 max-md:pt-0 xl:pt-32 z-10 object-contain"/>
        <div className="absolute -bottom-16 sm:-bottom-20 z-10 flex gap-4 sm:gap-6 max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgUrl={shoe} 
                changeBigShoeImg={img => setBigShoeImg(img)} 
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

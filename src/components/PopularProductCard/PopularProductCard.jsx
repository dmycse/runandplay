import { star } from "../../assets/icons";


export default function PopularProductCard({imgURL, name, rating, price}) {
  return (
    <div className="w-ful flex flex-1 flex-col">
      <img 
        src={imgURL} 
        alt={name}
        className="mb-8 w-[282px] h-[282px] rounded-3xl border-2 border-transparent hover:border-coral-red" 
      />
      <div className="mb-2 flex gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <span className="font-montserrat text-xl leading-normal text-slate-gray">{rating}</span>
      </div>
      <h3 className="mb-2 text-2xl leading-normal font-palanquin font-semibold">{name}</h3>
      <p className="text-2xl leading-normal font-montserrat font-semibold text-coral-red">{price}</p>
    </div>
  )
}

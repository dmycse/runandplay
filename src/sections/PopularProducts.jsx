import PopularProductCard from "../components/PopularProductCard/PopularProductCard";
import { products } from "../constans";

export default function PopularProducts() {
  return (
    <div 
      id="products"
      className="max-container max-sm:mt-12"
    >
      <div className="flex flex-col gap-5 ">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
            Experience top-notch quality and style with our sought-after selections. 
            Discover a world of comfort, design, and value
        </p>
      </div>
      <div 
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                  gap-14 sm:gap-4 cursor-pointer" >
        {products.map(product => <PopularProductCard key={product.name} {...product} />)}
      </div>
    </div>
  )
}

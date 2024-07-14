

export default function ShoeCard({imgUrl, changeBigShoeImg, bigShoeImg}) {
  
  const handleClick = () => {
    if (bigShoeImg !== imgUrl.bigShoe) {
      changeBigShoeImg(imgUrl.bigShoe);
    }
  };

  return (
    <div 
      className={`border-2 rounded-xl max-sm:flex-1 cursor-pointer
                ${bigShoeImg === imgUrl.bigShoe ? 'border-coral-red' : 'border-transparent'}`} 
      onClick={handleClick} 
    >
      <div className="flex justify-center items-center sm:w-40 sm:h-40 max-sm:p-4
                      bg-card bg-center bg-cover rounded-xl">
        <img 
          src={imgUrl.thumbnail} 
          alt="shoe collection" 
          width={127} 
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  )
}

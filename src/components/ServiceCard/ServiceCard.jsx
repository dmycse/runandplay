
export default function ServiceCard({ imgURL, label, subtext }) {
  return (
    <div className='mb-5 px-10 py-16 sm:w-[350px] rounded-[20px] shadow-3xl'>
      <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className='mb-3 font-palanquin text-3xl leading-normal font-bold'>
        {label}
      </h3>
      <p className='break-words font-montserrat text-lg leading-normal text-slate-gray'>
        {subtext}
      </p>
    </div>
  );
}

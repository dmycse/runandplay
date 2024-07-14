export default function Button({
    label, 
    iconUrl, 
    backgroundColor, 
    borderColor, 
    textColor, 
    fullWidth
  }) {
  return (
    <button 
      className={`py-4 px-7 flex justify-center items-center gap-2 
                font-montserrat text-lg leading-none border rounded-full  
                ${backgroundColor 
                  ? `${backgroundColor} ${borderColor} ${textColor}` 
                  : "bg-coral-red border-coral-red text-white "}
                ${backgroundColor 
                  ? "hover:border-coral-red  "
                  : "hover:bg-white"
                }
                ${fullWidth && "w-full"}
                hover:shadow-lg hover:text-coral-red
                `}
    >
      {label}
      {iconUrl && (
        <img 
          src={iconUrl} 
          alt="button icon"
          className="ml-2 w-5 h-5 rounded-ful"
        />)
      }
    </button>
  )
}

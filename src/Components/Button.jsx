
const Button = ({label, iconURL }) => {

  const bookBtn = () => {
    document.querySelector('#contact')
    .scrollIntoView({ behavior: "smooth"})
  }


  return (
    <>
      <button onClick={bookBtn} className="flex justify-center mt-10 items-center gap-2 px-7 py-4 border-2 font-montserrat text-lg leading-none bg-slate-600 text-white border-slate-600 rounded-full hover:bg-slate-900 mb-8">
        {label}

        {iconURL &&<img src={iconURL} alt="right arrow icon" className="ml-2 rounded-full w-5 h-5"/>}
      </button>
    </>
  )
}

export default Button

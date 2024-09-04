const Button = ({ label }) => {

  const bookBtn = () => {
    document.querySelector('#contact')
    .scrollIntoView({ behavior: "smooth"})
  }


  return (
    <>
      <button onClick={bookBtn} className="flex cursor-pointer justify-center mt-10 items-center gap-2 px-7 py-4 border-2 font-montserrat text-lg leading-none bg-slate-600 text-white border-slate-600 rounded-full md:mt-28 max-md:mb-6 hover:bg-slate-900">
        {label}
      </button>
    </>
  )
}

export default Button
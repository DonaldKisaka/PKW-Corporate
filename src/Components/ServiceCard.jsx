
const ServiceCard = ({ label, subtext, imgURL }) => {
  return (
    <>
      <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
        <img src={imgURL} alt="img" className="w-full" loading="lazy"/>
        <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
        <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
      </div>
    </>
  )
}

export default ServiceCard

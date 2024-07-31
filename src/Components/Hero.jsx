import { image } from "../assets"
import Button from "./Button"

const Hero = () => {

  

  return (
    <>
      <section id="home" className="bg-hero w-full min-h-screen flex flex-row max-md:flex-col max-md:container max-container padding-x relative">
        <div className="container relative">
            <img src={image} alt="image" className="z-[2] absolute left-0 w-1/3 pl-10 mt-20 pt-10 max-md:hidden" />
            <div className="w-full min-h-screen flex flex-col items-center  relative max-md:justify-center max-md:w-auto max-md:items-center max-md:text-center justify-center  ml-64 max-md:ml-0 -mt-50">
              <h1 className="text-2xl text-slate-600 font-montserrat font-bold">Philip K. Wafula CPA(K) MBA</h1>
              <p className="text-xl text-slate-500 font-bold">Accounting Consultant</p>
              <p className="font-montserrat text-slate-gray leading-normal text-xl mt-10">Tax, Accounting, Bookkeeping, Payroll Administration & more.</p>
              <Button label="Book a Consultation" />
            </div>
        </div>
      </section>
    </>
  )
}

export default Hero

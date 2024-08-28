import { image, img8, img9 } from "../assets"
import Button from "./Button"

const Hero = () => {

  

  return (
    <>
      <section id="home" className="bg-hero w-full min-h-screen h-auto flex flex-col md:flex-row container max-container padding-x relative">
        <div className="container relative flex flex-col items-center md:items-center md:flex-row">
            <img src={img8} alt="image" className="z-[2] w-1/2  md:w-1/4 md:pl-10  md:pt-10 max-md:pt-32" />
            <div className="w-full flex flex-col items-center justify-center md:justify-start text-center md:text-left md:ml-10 mt-5 md:mt-0">
              <h1 className="text-2xl md:text-3xl text-slate-600 font-montserrat font-bold max-md:text-xl">Philip K. Wafula CPA(K) MBA</h1>
              <p className="text-xl
               text-slate-600 font-bold md:text-2xl">Accounting Consultant</p>
              <p className="font-montserrat md:h-0 md:ml-5 text-slate-gray leading-loose text-lg md:text-xl mt-4 md:mt-10">Outsource your accounting and finance to an expert and concentrate on your core business.Let us handle your financials with precisions, so you can achieve more.</p>
              <Button label="Book a Consultation" />
            </div>
        </div>
      </section>
    </>
  )
}

export default Hero

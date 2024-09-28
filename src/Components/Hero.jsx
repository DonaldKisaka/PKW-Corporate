import Button from "./Button"

const Hero = () => {

  

  return (
    <>
      <section id="home" className="bg-hero w-full min-h-screen h-auto flex flex-col md:flex-row max-w-screen-wide mx-auto padding-x relative padding-y">
        <div className="absolute"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center md:flex-row justify-center">
            <div className="w-full md:w-1/2 mt-20 max-md:text-center max-md:mt-44">
              <h1 className="text-2xl md:text-3xl text-slate-600 font-montserrat font-bold max-md:text-xl">Philip K. Wafula CPA(K) MBA</h1>
              <p className="text-2xl text-slate-600 font-montserrat md:text-3xl font-semibold mb-6">Accounting Consultant</p>
              <p className="text-lg md:text-xl text-slate-gray font-montserrat leading-relaxed font-medium">Outsource your accounting and finance matters to an expert and concentrate on your core business.</p>
              <div className="flex justify-center md:justify-start">
                <Button label="Book a Consultation" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero

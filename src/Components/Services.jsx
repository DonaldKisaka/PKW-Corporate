import { services } from "../constants"
import ServiceCard from "./ServiceCard"

const Services = () => {
  return (
    <>
      <section id="services">
        <div className="container">
          <div className="flex flex-1 flex-col">
            <h2 className="text-3xl font-montserrat font-bold text-blue-500 text-center">Services Offered</h2>
            <p className="text-center my-6 font-montserrat text-lg text-slate-gray leading-normal">
              Experience a refreshing approach to accounting, where innovation meets expertise. We
              prioritize client satisfaction and deliver personalized solutions. Discover financial peace with our services
            </p>

            <div className="max-container flex justify-center flex-wrap gap-9 mt-6">
              {services.map((service) => (
                <ServiceCard key={service.label} {...service}/>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Services

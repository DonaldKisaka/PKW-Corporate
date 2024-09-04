import { andela, blackwealth, IBN, intouch, travelstart, balozi, gobeba, kicha } from "../assets";

const Patners = () => {
  return (
    <>
      <section  className="mt-20 bg-contact">
        <div className="flex flex-col flex-1">
            <h1 className="font-palanquin text-4xl font-bold lg:max-w-lg text-blue-500">Our Partners</h1>
            <p className="mt-6 font-montserrat text-xl text-slate-gray font-medium">Patners we have been privileged to serve</p>
             <div className="mt-10 flex flex-wrap gap-32 justify-center max-sm:grid max-sm:grid-cols-1 max-sm:ml-28">
                <img src={andela} alt="andela logo" />
                <img src={gobeba} alt="gobeba logo" width={150} height={200} />
                <img src={IBN} alt="Ibn logo" width={200} height={200} />
             </div>
             <div className="mt-10 flex flex-wrap gap-32 justify-center max-sm:grid max-sm:grid-cols-1 max-sm:ml-28">
                <img src={travelstart} alt="travelstart logo" className="max-sm:mt-10" />
                <img src={blackwealth} alt="blackwealth logo" />
                <img src={balozi} alt="balozi logo" />
             </div>
             <div className="mt-10 flex flex-wrap gap-32 justify-center mb-20 max-sm:grid max-sm:grid-cols-1 max-sm:ml-28">
              <img src={intouch} alt="intouch logo" width={150} height={200} className="max-sm:mt-10" />
              <img src={kicha} alt="kicha logo" />
             </div>
        </div>
      </section>
    </>
  )
}

export default Patners;

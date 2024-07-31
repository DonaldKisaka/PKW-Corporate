import { calculator } from "../assets"

const About = () => {
  return (
    <>
      <section id="about" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
        <div className="flex flex-1 flex-col">
            <h2 className="font-palanquin text-4xl font-bold lg:max-w-lg text-blue-500">About</h2>
            <p className="font-montserrat text-slate-gray font-medium info-text lg:max-w-lg mt-6">Philip Wafula has 25+ years of professional experience and has worked for diverse industries including audit,
               manufacturing, telecommunications, renewable energy, consulting and technology startups. His experience ranges from setting up and growing
               Accounting and finance functions from scratch and leading accounting teams in their daily accounting operations across various countries in Africa.
               He currently runs his own consulting company that offers accounting, payroll, tax compliance, remote contoller and management consulting services to SME's.
               He is a Certified Public Accountant - Kenya(CPA-K) and holds an MBA-Executive from Moi University - Kenya.
            </p>
        </div>

        <div className="flex-1 flex justify-center items-center">
            <img src={calculator} alt="calculator" width={570} height={522} className="object-contain" />
        </div>
      </section>
    </>
  )
}

export default About

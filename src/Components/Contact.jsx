import { IconPhone, IconMail, IconLocation } from "@tabler/icons-react"

const Contact = () => {
  return (
    <>
    <section id="contact" className="mt-12 bg-contact">
      <div className="container flex flex-1 flex-col">
        <h2 className="text-4xl leading-tight mb-4 font-bold text-center text-blue-500">Need additional information</h2>   
        <p className="text-center font-montserrat p-8 text-2xl  font-bold">Don't settle for a typical accountant!</p>
        <div className="inline-block p-4 text-center">
              <a href="/" className="no-underline text-black p-8 inline-block  font-medium transition-all duration-200 mb-2   hover:text-blue-500">
                <IconPhone /> &nbsp; +254 722 612 657
              </a>
              <a href="/" className="no-underline inline-block p-8  text-black font-medium transition-all duration-200 mb-2   hover:text-blue-500">
                <IconMail /> &nbsp; philip.wafula@gmail.com
              </a>
              <a href="/" className="no-underline inline-block p-8 text-black font-medium transition-all duration-200 mb-2   hover:text-blue-500">
                <IconLocation /> &nbsp; Nairobi, Kenya
              </a>
              <a href="/" className="no-underline inline-block p-8 text-black font-medium transition-all duration-200 mb-2   hover:text-blue-500">
                <IconMail /> &nbsp; P.O Box 23376-00625
              </a>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Contact

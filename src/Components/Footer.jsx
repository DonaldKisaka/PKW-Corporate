import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconMail, IconPhone, IconLocation } from "@tabler/icons-react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex max-sm:items-center flex-col gap-5">
            <h1 className="font-montserrat text-white text-lg font-semibold underline">Contact us</h1>
              <a href="/" className="no-underline text-white text-sm font-montserrat transition-all duration-200 mb-2   hover:underline">
                <IconPhone /> +254 722 612 657
              </a>
              <a href="mailto:pwafula@pkw.finance" className="no-underline  text-white font-montserrat text-sm transition-all duration-200 mb-2   hover:underline">
                <IconMail /> pwafula@pkw.finance
              </a>
              <a href="/" className="no-underline  text-white  text-sm font-montserrat transition-all duration-200 mb-2   hover:underline">
                <IconLocation /> Nairobi, Kenya
              </a>
          </div>

          <div className="flex max-sm:items-center flex-col gap-3">
            <h1 className="font-montserrat  text-white font-semibold text-lg underline max-sm:mt-10">Company</h1>
            <a href="#home" className="text-white text-lg font-montserrat mb-2 hover:underline">Home</a>
            <a href="#about" className="text-white text-lg font-montserrat mb-2  hover:underline">About Us</a>
            <a href="#services" className="text-white text-lg font-montserrat mb-2  hover:underline">Services</a>
          </div>

          <div className="flex max-sm:items-center flex-col text-lg gap-3 max-lg:mt-10">
            <h1 className="font-montserrat text-white font-semibold underline">Socials</h1>
            <a href="https://www.linkedin.com/in/philip-wafula-61470b35/" target="_blank" rel="noopener noreferrer" className="text-white text-lg font-montserrat hover:underline">LinkedIn</a>
          </div>
        </div>

         <hr className="border-t border-white-400 my-8"/>
         <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
            <h3 className="text-white font-montserrat font-bold text-sm">
              Copyright © 2024.PKW Corporate Solutions.All rights are reserved
            </h3>
            <div>
              <a href="https://www.linkedin.com/in/philip-wafula-61470b35/" target="_blank" rel="noopener noreferrer " className="text-white text-4xl font-montserrat font-bold">
                  <IconBrandLinkedin className="w-10 h-10 hover:w-12 hover:h-12 transition-transform duration-300" />
              </a>
            </div>
          </div>

      </footer>
    </>
  )
}

export default Footer;

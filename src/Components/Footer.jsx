import { IconBrandLinkedin } from "@tabler/icons-react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
            <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
                <h3 className="text-white text-xl font-montserrat font-bold">
                Copyright ©. All rights are reserved
                </h3>
                <div>
                    <a href="https://www.linkedin.com/in/philip-wafula-61470b35/" target="_blank" rel="noopener noreferrer " className="text-white text-4xl font-montserrat font-bold">
                        <IconBrandLinkedin className="w-10 h-10 hover:w-12 hover:h-12" />
                    </a>
                </div>
            </div>

        </div>
      </footer>
    </>
  )
}

export default Footer;

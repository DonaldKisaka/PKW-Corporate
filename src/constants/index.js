import { laptop, laptop2, img1, img2 } from "../assets"

export const navLinks = [
    { href: "#home", label: "Home"},
    { href: "#about",label: "About"},
    { href: "#services", label: "Services"},
    { href: "#contact", label: "Contact"}
]

export const services = [
    {
        imgURL: laptop,
        label: "Accounting",
        subtext: "My accounting services are designed to help you keep your records accurate and up-to-date."
    },
    {
        imgURL: laptop2,
        label: "Internal Controls Health Checks",
        subtext: "Maintaining robust internal controls is essential for protecting your organization's assets and ensuring the integrity of your financial reporting."
    },
    {
        imgURL: img1,
        label: "Payroll Adminstration",
        subtext: "My payroll administration services are here to simplify the process."
    },
    {
        imgURL: img2,
        label: "Tax Compliance",
        subtext: "Navigating the complexities of tax laws and regulations can be challenging, but my tax compliance services is designed to keep you compliant and minimize your tax liabilities. I offer comprehensive tax planning and preparation services for individuals and businesses."
    }
]
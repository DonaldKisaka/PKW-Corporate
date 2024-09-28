import About from "./Components/About";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import Patners from "./Components/Patners";

const App = () => {
  return (
    <>
      <main className="relative">
        <Nav />
        <section className="padding-b">
          <Hero />
        </section>
        <section className="padding">
          <About />
        </section>
        <section className="padding-x mt-4">
          <Services />
        </section>
        <section className="padding-x">
          <Patners />
        </section>
        <section id="contact" className="bg-slate-gray padding-x padding-t pb-8">
          <Footer />
        </section>
      </main>
    </>
  )
}

export default App;

import About from "./Components/About";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Services from "./Components/Services";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <main className="relative">
        <Nav />
        <section className="wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="padding">
          <About />
        </section>
        <section className="padding-x mt-4">
          <Services />
        </section>
        <section className="padding-x">
          <Contact />
        </section>
        <section className="bg-slate-gray padding-x padding-t pb-8">
          <Footer />
        </section>
      </main>
    </>
  )
}

export default App;

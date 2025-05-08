import { BrowserRouter } from "react-router-dom";
import { TbNotes } from "react-icons/tb";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer, Resume } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>

{/* Resume Button */}
<a
  href={Resume}
  // put the name of the pdf file here  and the resume also in the public folder
  download='Hire_me_or_you_are_gay.pdf'
  className='rotate-[-90deg] bottom-20 right-[-54px] md:rotate-0 fixed z-20 md:bottom-10 md:right-8 
  uppercase text-[#AAA6C3] bg-transparent bg-opacity-100 rounded-full border border-transparent 
  hover:border-purple-500 transition-all duration-300 group hover:bg-gradient-to-r from-purple-600 to-indigo-600 
  shadow-lg hover:shadow-purple-500/50'
>
  <div className="flex items-center p-3">
    {/* RESUME Text without animation on mobile */}
    <span className="p-0.5 md:transition-all md:duration-300 md:group-hover:text-white md:group-hover:rotate-3 md:group-hover:translate-x-1 md:delay-75">R</span>
    <span className="p-0.5 md:transition-all md:duration-300 md:group-hover:text-white md:group-hover:rotate-3 md:group-hover:translate-x-1 md:delay-150">E</span>
    <span className="p-0.5 md:transition-all md:duration-300 md:group-hover:text-white md:group-hover:rotate-3 md:group-hover:translate-x-1 md:delay-225">S</span>
    <span className="p-0.5 md:transition-all md:duration-300 md:group-hover:text-white md:group-hover:rotate-3 md:group-hover:translate-x-1 md:delay-300">U</span>
    <span className="p-0.5 md:transition-all md:duration-300 md:group-hover:text-white md:group-hover:rotate-3 md:group-hover:translate-x-1 md:delay-375">M</span>
    <span className="p-0.5 md:transition-all md:duration-300 md:group-hover:text-white md:group-hover:rotate-3 md:group-hover:translate-x-1 md:delay-450">E</span>
    {/* TbNotes Icon (No animation on mobile) */}
    <TbNotes className="inline-block ml-2 text-lg text-[#AAA6C3] md:group-hover:text-white md:group-hover:scale-150 md:transition-all md:duration-300" />
  </div>
</a>


        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <Footer />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

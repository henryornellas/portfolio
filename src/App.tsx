import Navbar from "./scenes/navbar/index.tsx";
import Home from "./scenes/home/index.tsx";
import About from "./scenes/about/index.tsx";
import Projects from "./scenes/projects/index.tsx";
import Contact from "./scenes/contact/index.tsx";
import Footer from "./scenes/footer/index.tsx";

function App() {

  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

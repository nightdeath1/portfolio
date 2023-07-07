import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from './components/Portfolio.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import SocialLinks from './components/SocialLinks.jsx'
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;

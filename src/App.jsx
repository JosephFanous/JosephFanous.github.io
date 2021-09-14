import './App.scss';
import './fonts.scss';
import Navbar from './components/navbar';
import Welcome from './components/home/welcome';
import Projects from './components/projects/projects';
import Resume from './components/resume/resume';
import Contact from './components/contact/contact';
import Part from './components/particles';
//import Particles from 'react-particles-js';
//import Particles from "react-tsparticles";



function App() {

  return (
    <div className="App">
      {/* <Part /> */}
      <Navbar />
      <Welcome />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
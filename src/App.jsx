import './App.scss';
import './fonts.scss';
import Navbar from './components/navbar';
import Welcome from './components/home/welcome';
import Projects from './components/projects/projects'
import Resume from './components/resume/resume'
import Contact from './components/contact/contact'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
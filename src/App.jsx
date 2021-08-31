import './App.scss';
import Navbar from './components/navbar';
import Welcome from './components/home/welcome';
import Projects from './components/projects/projects'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Projects/>
    </div>
  );
}

export default App;
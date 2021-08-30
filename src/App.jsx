import './App.scss';
import Navbar from './components/navbar';
import Welcome from './components/home/welcome';
import Home from './components/projects/projects'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Home/>
    </div>
  );
}

export default App;
//jshint esversion:6
import logo from './logo.svg';
import './index.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Navbar />
        <Home/>
      </div>
    </div>
  );
}

export default App;

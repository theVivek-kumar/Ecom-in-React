import logo from './logo.svg';
import './components/navbar.css';
import './App.css';
import './components/CardComponent.css'
import { CardComponent } from './components/CardComponent';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <CardComponent></CardComponent>
      
    </div>
  );
}

export default App;

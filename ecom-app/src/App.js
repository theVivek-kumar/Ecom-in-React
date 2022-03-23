import logo from './logo.svg';
import './components/navbar.css';
import './App.css';
import './components/CardComponent.css'
import { CardComponent } from './components/CardComponent';
import Navbar from './components/Navbar';
import { Heading } from './/components/BreackHeading/BreakHeading';
import './components/BreackHeading/BreakHeading.css';
import { Cardcategory } from './components/CardCateories/CardCategory';
import './components/CardCateories/CardCategory.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='seprator'></div>
      <CardComponent></CardComponent>
      <Heading></Heading>
      <Cardcategory></Cardcategory>
      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Services from './components/Services/Services'
import AOS from 'aos';

function App() {
  // AOS.init();
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Benefits></Benefits>
      <Services></Services>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Slideshow  from './Components/SlideShow';
import HeroComponent from './Components/HeroComponent';
import FinalContentMainPage from './Components/FinalContentMainPage';
import Footer from './Components/Footer';

function App() {
  return (
   
     <>
     <Header />
     <Slideshow />
     <HeroComponent/>
     <FinalContentMainPage/>
     <div class="bg-black w-full h-auto mt-24 p-5">
             <p class="text-white text-center">Email: harshaksrinivas@gmail.com</p>
             <p class="text-white text-center">Mobile: 8050018571</p>
     </div>
     </>
   
  );
}

export default App;

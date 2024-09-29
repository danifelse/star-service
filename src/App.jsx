import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Layout/Navbar';
import HeroSection from './components/Fragments/HeroSection';
import FloatingBackgrund from './components/Layout/FloatingBackground';
import Footer from './components/Layout/Footer';
import Section1 from './components/Fragments/Section1';
import Section2 from './components/Fragments/Section2';
import Section3 from './components/Fragments/Section3';
import WAButton from './components/Button/WAButton';

function App() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });

  return (
    <div>
      <Navbar />
      <FloatingBackgrund>
        <HeroSection />
      </FloatingBackgrund>
      <Section1 />
      <WAButton />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  )
}

export default App

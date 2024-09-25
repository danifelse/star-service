import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Layout/Navbar';

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
      <div className='h-screen flex items-center justify-center dark:text-white dark:bg-slate-900'>
        <h1 className='text-3xl font-bold text-center'>STAR SERVICE</h1>
      </div>
    </div>
  )
}

export default App

import { useState, useEffect } from 'react';
import './App.css'; 
import PopUser from './components/PopUser/PopUser';
import PopNewCard from './components/PopNewCard/PopNewCard';
import PopBrowse from './components/PopBrowse/PopBrowse';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { initialTasks } from './data'; 

function App() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCards(initialTasks); 
      setIsLoading(false);    
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="wrapper">
      <PopUser />
      <PopNewCard />
      <PopBrowse />

      {isLoading ? (
        <div className="loader-container">
          <p className="loader-text">Данные загружаются...</p>
        </div>
      ) : (
        <>
          <Header />
          <Main cards={cards} />
        </>
      )}
    </div>
  );
}

export default App;
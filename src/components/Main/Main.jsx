import Column from '../Column/Column';

function Main({ cards = [] }) {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            
            <Column 
              title="Без статуса" 
              cards={cards.filter(task => task.status === "Без статуса")} 
            />
            
            <Column 
              title="Нужно сделать" 
              cards={cards.filter(task => task.status === "Нужно сделать")} 
            />
            
            <Column 
              title="В работе" 
              cards={cards.filter(task => task.status === "В работе")} 
            />
            
            <Column 
              title="Тестирование" 
              cards={cards.filter(task => task.status === "Тестирование")} 
            />
            
            <Column 
              title="Готово" 
              cards={cards.filter(task => task.status === "Готово")} 
            />
            
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
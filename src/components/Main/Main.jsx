import Column from '../Column/Column';

const COLUMN_STATUSES = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово"
];

function Main({ cards = [] }) {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
          
            {COLUMN_STATUSES.map((status, index) => (
              <Column 
                key={index} 
                title={status} 
                cards={cards.filter(task => task.status === status)} 
              />
            ))}
            
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
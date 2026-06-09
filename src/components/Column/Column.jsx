import Card from '../Card/Card';

function Column({ title }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        
        <Card 
          title="Название задачи" 
          category="Web Design" 
          categoryClass="_orange" 
          date="30.10.23" 
        />
        <Card 
          title="Вторая задача" 
          category="Research" 
          categoryClass="_green" 
          date="31.10.23" 
        />
        
      </div>
    </div>
  );
}

export default Column;
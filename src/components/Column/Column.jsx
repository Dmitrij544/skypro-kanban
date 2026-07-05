import Card from '../Card/Card';
import * as S from './Column.styled';

function Column({ title, cards = [] }) {
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <p>{title}</p>
      </S.ColumnTitle>
      <S.Cards>
        {cards.map((task) => {
          const currentTaskId = task._id || task.id;
          
          return (
            <Card 
              key={currentTaskId} 
              _id={currentTaskId} 
              title={task.title} 
              category={task.topic} 
              categoryClass={
                task.topic === 'Web Design' || task.topic === 'Web Dev' ? '_orange' : 
                task.topic === 'Research' ? '_green' : '_purple'
              } 
              date={task.date}
              $isDone={title === "Готово"}
            />
          );
        })}
      </S.Cards>
    </S.MainColumn>
  );
}

export default Column;
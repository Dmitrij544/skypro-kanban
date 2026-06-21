import Column from '../Column/Column';
import * as S from './Main.styled'; // Подключаем наши стили

const COLUMN_STATUSES = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово"
];

function Main({ cards = [] }) {
  return (
    <S.MainContainer>
      <S.Container>
        <S.MainBlock>
          <S.MainContent>
          
            {COLUMN_STATUSES.map((status, index) => (
              <Column 
                key={index} 
                title={status} 
                cards={cards.filter(task => task.status === status)} 
              />
            ))}
            
          </S.MainContent>
        </S.MainBlock>
      </S.Container>
    </S.MainContainer>
  );
}

export default Main;
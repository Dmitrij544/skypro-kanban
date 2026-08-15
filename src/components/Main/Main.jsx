import Column from '../Column/Column';
import * as S from './Main.styled'; 

const COLUMN_STATUSES = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово"
];

function Main({ cards = [] }) {
  const safeCards = Array.isArray(cards) ? cards : [];

  return (
    <S.MainContainer>
      <S.Container>
        <S.MainBlock>
          <S.MainContent>
          
            {safeCards.length === 0 ? (
              <div style={{ width: '100%', textAlign: 'center', padding: '40px 0' }}>
                <p style={{ fontSize: '18px', color: '#94A6BE', fontWeight: '500' }}>Новых задач нет</p>
              </div>
            ) : (
              COLUMN_STATUSES.map((status, index) => {
                 const filteredTasks = safeCards.filter(task => {
                    return String(task.status).trim() === status.trim();
                 });

                 return (
                    <Column 
                       key={index} 
                       title={status} 
                       cards={filteredTasks} 
                    />
                 );
              })
            )}
            
          </S.MainContent>
        </S.MainBlock>
      </S.Container>
    </S.MainContainer>
  );
}

export default Main;
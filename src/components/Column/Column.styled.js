import styled from 'styled-components';

export const MainColumn = styled.div`
  width: 20%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin-bottom: 20px;
  margin-left: -5px;

  p {
    color: #94A6BE;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardsItem = styled.div`
  padding: 5px;
  animation: card-animation 0.5s ease-after-load; // Ваша анимация из CSS
`;

export const Card = styled.div`
  width: 220px;
  height: 130px;
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0px 4px 25px -6px rgba(0, 0, 0, 0.09);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 15px 13px;
`;

export const CardGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// Стилизация темы карточки на основе пропса $topic
export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 10px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
  }

  /* Динамически подставляем ваши цвета из CSS в зависимости от темы */
  ${props => props.$topic === 'Web Design' && `
    background-color: #FFE4C2;
    p { color: #FF6D00; }
  `}

  ${props => props.$topic === 'Research' && `
    background-color: #B4FDD1;
    p { color: #06B16E; }
  `}

  ${props => !['Web Design', 'Research'].includes(props.$topic) && `
    background-color: #E9D4FF;
    p { color: #9A48F1; }
  `}
`;

export const CardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94A6BE;
  }
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  text-decoration: none;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    width: 13px;
    height: 13px;
    margin-right: 6px;
  }

  p {
    margin-left: 6px;
    color: #94A6BE;
    font-size: 10px;
    line-height: 13px;
  }
`;
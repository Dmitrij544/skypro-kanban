import styled from 'styled-components';

export const CardsItem = styled.div`
  padding: 5px;
  animation: card-animation 0.5s ease-after-load; 
`;

export const CardContainer = styled.div`
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

  ${props => props.$categoryClass === '_orange' && `
    background-color: #FFE4C2;
    p { color: #FF6D00; }
  `}

  ${props => props.$categoryClass === '_green' && `
    background-color: #B4FDD1;
    p { color: #06B16E; }
  `}

  ${props => props.$categoryClass === '_purple' && `
    background-color: #E9D4FF;
    p { color: #9A48F1; }
  `}

  ${props => !['_orange', '_green', '_purple'].includes(props.$categoryClass) && `
    background: #94A6BE;
    p { color: #FFFFFF; }
  `}
`;

export const CardBtn = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
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

  ${props => props.$isDone && `
    text-decoration: line-through;
  `}
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    width: 13px;
    height: 13px;
    margin: 0; 
  }

  p {
    margin-left: 6px; 
    color: #94A6BE;
    font-size: 10px;
    line-height: 13px;
  }
`;
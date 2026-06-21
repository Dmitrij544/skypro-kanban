import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 100%;
  background-color: #EAEEF6; // Цвет фона из вашего .wrapper
  padding: 40px 0; // Отступы сверху и снизу для контента
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 85px;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between; // Равномерно распределяет колонки по ширине
`;

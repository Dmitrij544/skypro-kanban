import styled from 'styled-components';

export const CalendarContainer = styled.div`
  width: 182px;
  margin-bottom: 20px;
`;

export const CalendarTtl = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  display: block;
  margin-bottom: 14px;
  padding: 0 7px;
`;

export const CalendarBlock = styled.div`
  display: block;
`;

export const CalendarNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0 7px;
`;

export const CalendarMonth = styled.div`
  color: #94A6BE;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const NavAction = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    fill: #94A6BE;
    transition: fill 0.2s ease;
  }

  &:hover svg {
    fill: #565EEF;
  }
`;

export const CalendarContent = styled.div`
  width: 100%;
`;

export const CalendarDaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

export const CalendarDayName = styled.div`
  color: #94A6BE; 
  font-size: 8px;
  font-weight: 500;
  line-height: 12px;
  text-transform: uppercase;
  width: 11px;
  height: 12px;
  text-align: center;
`;

export const CalendarCells = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4.25px;
  padding: 0 5px 0 0;
`;

export const EmptyCell = styled.div`
  width: 22px;
  height: 22px;
`;

export const CalendarCell = styled.div`
  width: 22px;
  height: 22px;
  font-size: 10px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;

  color: #94A6BE;

  &:hover {
    background-color: #EAEEF6;
  }

  ${props => props.$isSelected && `
    background-color: #94A6BE !important;
    color: #FFFFFF !important;
    font-weight: 600;
    opacity: 1;
  `}
`;

export const CalendarPeriod = styled.div`
  margin-top: 10px;
  padding: 0 7px;
`;

export const CalendarP = styled.p`
  color: #94A6BE;
  font-size: 10px;
  line-height: 1.2;

  span {
    color: #000000;
    font-weight: 600;
  }
`;

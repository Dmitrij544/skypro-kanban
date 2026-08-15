import * as S from './Calendar.styled';

function Calendar({ selected, setSelected }) {

  const daysData = [
    { id: 4, day: '1', fullDate: '2023-09-01' },
    { id: 5, day: '2', fullDate: '2023-09-02' },
    { id: 6, day: '3', fullDate: '2023-09-03' },
    { id: 7, day: '4', fullDate: '2023-09-04' },
    { id: 8, day: '5', fullDate: '2023-09-05' },
    { id: 9, day: '6', fullDate: '2023-09-06' },
    { id: 10, day: '7', fullDate: '2023-09-07' },
    { id: 11, day: '8', fullDate: '2023-09-08' },
    { id: 12, day: '9', fullDate: '2023-09-09' },
    { id: 13, day: '10', fullDate: '2023-09-10' },
    { id: 14, day: '11', fullDate: '2023-09-11' },
    { id: 15, day: '12', fullDate: '2023-09-12' },
    { id: 16, day: '13', fullDate: '2023-09-13' },
    { id: 17, day: '14', fullDate: '2023-09-14' },
    { id: 18, day: '15', fullDate: '2023-09-15' },
    { id: 19, day: '16', fullDate: '2023-09-16' },
    { id: 20, day: '17', fullDate: '2023-09-17' },
    { id: 21, day: '18', fullDate: '2023-09-18' },
    { id: 22, day: '19', fullDate: '2023-09-19' },
    { id: 23, day: '20', fullDate: '2023-09-20' },
    { id: 24, day: '21', fullDate: '2023-09-21' },
    { id: 25, day: '22', fullDate: '2023-09-22' },
    { id: 26, day: '23', fullDate: '2023-09-23' },
    { id: 27, day: '24', fullDate: '2023-09-24' },
    { id: 28, day: '25', fullDate: '2023-09-25' },
    { id: 29, day: '26', fullDate: '2023-09-26' },
    { id: 30, day: '27', fullDate: '2023-09-27' },
    { id: 31, day: '28', fullDate: '2023-09-28' },
    { id: 32, day: '29', fullDate: '2023-09-29' },
    { id: 33, day: '30', fullDate: '2023-09-30' },
    { id: 34, day: '31', fullDate: '2023-09-31' }
  ];

  const activeDay = daysData.find(d => d.fullDate === selected);

  const handleDayClick = (fullDateString) => {
    if (typeof setSelected === 'function') {
      setSelected(fullDateString); 
    }
  };

  const formattedPeriodDate = activeDay 
    ? new Date(activeDay.fullDate).toLocaleDateString('ru-RU').replace('.2023', '.23').replace('.2026', '.26') + '.'
    : '';

  return (
    <S.CalendarContainer>
      <S.CalendarTtl>Даты</S.CalendarTtl>
      <S.CalendarBlock>
        <S.CalendarNav>
          <S.CalendarMonth style={{ color: '#94A6BE' }} >Сентябрь 2023</S.CalendarMonth>
          <S.NavActions>
            <S.NavAction data-action="prev">
              <svg xmlns="http://w3.org" width="6" height="11" viewBox="0 0 6 11">
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </S.NavAction>
            <S.NavAction data-action="next">
              <svg xmlns="http://w3.org" width="6" height="11" viewBox="0 0 6 11">
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.41218 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </S.NavAction>
          </S.NavActions>
        </S.CalendarNav>
        
        <S.CalendarContent>
          <S.CalendarDaysNames>
            <S.CalendarDayName>пн</S.CalendarDayName>
            <S.CalendarDayName>вт</S.CalendarDayName>
            <S.CalendarDayName>ср</S.CalendarDayName>
            <S.CalendarDayName>чт</S.CalendarDayName>
            <S.CalendarDayName>пт</S.CalendarDayName>
            <S.CalendarDayName>сб</S.CalendarDayName>
            <S.CalendarDayName>вс</S.CalendarDayName>
          </S.CalendarDaysNames>
          
          <S.CalendarCells>
            <S.EmptyCell />
            <S.EmptyCell />
            <S.EmptyCell />

            {daysData.map((item) => {
              const isSelected = selected === item.fullDate;
              return (
                <S.CalendarCell
                  key={item.id}
                  $isSelected={isSelected}
                  onClick={() => handleDayClick(item.fullDate)}
                >
                  {item.day}
                </S.CalendarCell>
              );
            })}
          </S.CalendarCells>
        </S.CalendarContent>
        
        <S.CalendarPeriod>
          <S.CalendarP>
            {activeDay ? (
              <>
                Срок исполнения: <span>{formattedPeriodDate}</span>
              </>
            ) : (
              <>Выберите срок исполнения.</>
            )}
          </S.CalendarP>
        </S.CalendarPeriod>
      </S.CalendarBlock>
    </S.CalendarContainer>
  );
}

export default Calendar;
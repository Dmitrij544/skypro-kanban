import { useState } from 'react';
import PopEdit from './PopEdit'; 

const allTasks = [
  { id: 1, title: 'Название задачи', category: 'Web Design', categoryClass: '_orange', date: '30.10.23', description: 'Описание задачи по веб-дизайну...' },
  { id: 2, title: 'Название задачи', category: 'Research', categoryClass: '_green', date: '30.10.23', description: 'Результаты исследования конкурентов...' },
  { id: 3, title: 'Название задачи', category: 'Copywriting', categoryClass: '_purple', date: '30.10.23', description: 'Текст для главной страницы...' }
];

export default function PopBrowse({ onClose, onSave, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentStatus, setCurrentStatus] = useState('Нужно сделать');
  
  const daysData = [
    { id: 1, day: '29', type: '_other-month', fullDate: '29.08.23' },
    { id: 2, day: '30', type: '_other-month', fullDate: '30.08.23' },
    { id: 3, day: '31', type: '_other-month', fullDate: '31.08.23' },
    
    { id: 4, day: '1', type: '_cell-day', fullDate: '01.09.23' },
    { id: 5, day: '2', type: '_cell-day', fullDate: '02.09.23' },
    { id: 6, day: '3', type: '_cell-day _weekend', fullDate: '03.09.23' },
    { id: 7, day: '4', type: '_cell-day _weekend', fullDate: '04.09.23' },
    
    { id: 8, day: '5', type: '_cell-day', fullDate: '05.09.23' },
    { id: 9, day: '6', type: '_cell-day', fullDate: '06.09.23' },
    { id: 10, day: '7', type: '_cell-day', fullDate: '07.09.23' },
    { id: 11, day: '8', type: '_cell-day', fullDate: '08.09.23' },
    { id: 12, day: '9', type: '_cell-day', fullDate: '09.09.23' },
    { id: 13, day: '10', type: '_cell-day _weekend', fullDate: '10.09.23' },
    { id: 14, day: '11', type: '_cell-day _weekend', fullDate: '11.09.23' },
    
    { id: 15, day: '12', type: '_cell-day', fullDate: '12.09.23' },
    { id: 16, day: '13', type: '_cell-day', fullDate: '13.09.23' },
    { id: 17, day: '14', type: '_cell-day', fullDate: '14.09.23' },
    { id: 18, day: '15', type: '_cell-day', fullDate: '15.09.23' },
    { id: 19, day: '16', type: '_cell-day', fullDate: '16.09.23' },
    { id: 20, day: '17', type: '_cell-day _weekend', fullDate: '17.09.23' },
    { id: 21, day: '18', type: '_cell-day _weekend', fullDate: '18.09.23' },
    
    { id: 22, day: '19', type: '_cell-day', fullDate: '19.09.23' },
    { id: 23, day: '20', type: '_cell-day', fullDate: '20.09.23' },
    { id: 24, day: '21', type: '_cell-day', fullDate: '21.09.23' },
    { id: 25, day: '22', type: '_cell-day', fullDate: '22.09.23' },
    { id: 26, day: '23', type: '_cell-day', fullDate: '23.09.23' },
    { id: 27, day: '24', type: '_cell-day _weekend', fullDate: '24.09.23' },
    { id: 28, day: '25', type: '_cell-day _weekend', fullDate: '25.09.23' },
    
    { id: 29, day: '26', type: '_cell-day', fullDate: '26.09.23' },
    { id: 30, day: '27', type: '_cell-day', fullDate: '27.09.23' },
    { id: 31, day: '28', type: '_cell-day', fullDate: '28.09.23' },
    { id: 32, day: '29', type: '_cell-day', fullDate: '29.09.23' },
    { id: 33, day: '30', type: '_cell-day', fullDate: '30.09.23' },
    { id: 34, day: '31', type: '_cell-day _weekend', fullDate: '31.09.23' }
  ];
  const [selectedDay] = useState(daysData.find(d => d.day === '30' && d.type !== '_other-month') || null);
  const getActiveTask = () => {
    if (typeof window === 'undefined') return allTasks[0];
    const activeEl = document.activeElement;
    if (activeEl && activeEl.closest('.cards__item')) {
      const cardEl = activeEl.closest('.cards__item');
      if (cardEl.innerHTML.includes('_green')) return allTasks[1];
      if (cardEl.innerHTML.includes('_purple')) return allTasks[2];
    }
    return allTasks[0];
  };

  const task = getActiveTask();

  if (isEditing) {
    return (
      <PopEdit 
        task={task} 
        onClose={onClose} 
        onSave={(updatedTask) => {
          if (typeof onSave === 'function') onSave(updatedTask);
          setIsEditing(false); 
        }} 
        onDelete={onDelete} 
      />
    );
  }

  const statuses = [
    { name: 'Без статуса', colorClass: '_hide' },
    { name: 'Нужно сделать', colorClass: '_gray' },
    { name: 'В работе', colorClass: '_hide' },
    { name: 'Тестирование', colorClass: '_hide' },
    { name: 'Готово', colorClass: '_hide' }
  ];
  const handleClose = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    window.location.hash = '';
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{task.title}</h3>
              <div className={`categories__theme theme-top ${task.categoryClass} _active-category`}>
                <p className={task.categoryClass}>{task.category}</p>
              </div>
            </div>

            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                {statuses.map((status) => {
                  const isActive = currentStatus === status.name;
                  return (
                    <div
                      key={status.name}
                      onClick={() => setCurrentStatus(status.name)}
                      className={`status__theme ${status.colorClass} ${isActive ? '_active-status' : ''}`}
                      style={{ cursor: 'pointer' }}
                    >
                      <p className={status.colorClass}>{status.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pop-browse__wrap">
              <div className="pop-browse__form form-browse" id="formBrowseCard">
                <div className="form-browse__block">
                  <p className="subttl">Описание задачи</p>
                  <div className="form-browse__area calendar__p">
                    Описание задачи
                  </div>
                </div>
              </div>

              <div className="pop-new-card__calendar calendar">
                <p className="calendar__ttl subttl">Даты</p>
                <div className="calendar__block">
                  
                  <div className="calendar__nav">
                    <div className="calendar__month">Сентябрь 2023</div>
                    <div className="nav__actions">
                      <div className="nav__action" data-action="prev">
                        <svg xmlns="http://w3.org" width="6" height="11" viewBox="0 0 6 11">
                          <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                        </svg>
                      </div>
                      <div className="nav__action" data-action="next">
                        <svg xmlns="http://w3.org" width="6" height="11" viewBox="0 0 6 11">
                          <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="calendar__content">
                    <div className="calendar__days-names">
                      <div className="calendar__day-name">пн</div>
                      <div className="calendar__day-name">вт</div>
                      <div className="calendar__day-name">ср</div>
                      <div className="calendar__day-name">чт</div>
                      <div className="calendar__day-name">пт</div>
                      <div className="calendar__day-name -weekend-">сб</div>
                      <div className="calendar__day-name -weekend-">вс</div>
                    </div>

                    <div className="calendar__cells" style={{ pointerEvents: 'none' }}>
                      {daysData.map((item) => {
                        const isSelected = selectedDay?.id === item.id;
                        return (
                          <div
                            key={item.id}
                            className={`calendar__cell ${item.type} ${isSelected ? '_active' : ''}`}
                          >
                            {item.day}
                          </div>
                        );
                      })}
                    </div>
                  </div> 

                  <div className="calendar__period">
                    <p className="calendar__p date-end">
                      Срок исполнения:{' '}
                      <span className="date-control" style={{ color: '#000', fontWeight: '600' }}>
                        {selectedDay ? selectedDay.fullDate : task.date}
                      </span>
                      .
                    </p>
                  </div>

                </div> 
              </div> 

            </div>

            <div className="pop-browse__btn-browse">
              <div className="btn-group">
                <button type="button" onClick={() => setIsEditing(true)} className="btn-browse__edit _btn-bor _hover03">
                  Редактировать задачу
                </button>
                <button type="button" onClick={() => onDelete && onDelete(task.id)} className="btn-browse__delete _btn-bor _hover03">
                  Удалить задачу
                </button>
              </div>
              <button type="button" onClick={handleClose} className="btn-browse__close _btn-bg _hover01">
                Закрыть
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
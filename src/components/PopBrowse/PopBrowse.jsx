import { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ThemeContext from '../../ThemeContext'; // ДОБАВИЛИ: Импорт вашего контекста темы

export default function PopBrowse({ cards, onDeleteTask }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const task = cards?.find((t) => String(t._id || t.id) === String(id)) || {};

  const [currentStatus] = useState(task?.status || 'Без статуса');

  // ДОБАВИЛИ: Чтение темы из вашего рабочего контекста
  const context = useContext(ThemeContext);
  const theme = context?.theme || 'light';
  const isDark = theme === 'dark';

  const handleClose = (e) => {
    if (e) e.preventDefault();
    navigate('/'); 
  };

  const handleGoToEdit = (e) => {
    if (e) e.preventDefault();
    navigate(`/task/${task._id || id}/edit`);
  };

  const handleDeleteTask = (e) => {
    if (e) e.preventDefault();
    if (typeof onDeleteTask === 'function') {
      onDeleteTask(task._id || id); 
    }
    navigate('/'); 
  };

  const daysData = [
    { id: 1, day: '29', type: '_other-month', dayStr: '29' },
    { id: 2, day: '30', type: '_other-month', dayStr: '30' },
    { id: 3, day: '31', type: '_other-month', dayStr: '31' },
    { id: 4, day: '1', type: '_cell-day', dayStr: '01' },
    { id: 5, day: '2', type: '_cell-day', dayStr: '02' },
    { id: 6, day: '3', type: '_cell-day _weekend', dayStr: '03' },
    { id: 7, day: '4', type: '_cell-day _weekend', dayStr: '04' },
    { id: 8, day: '5', type: '_cell-day', dayStr: '05' },
    { id: 9, day: '6', type: '_cell-day', dayStr: '06' },
    { id: 10, day: '7', type: '_cell-day', dayStr: '07' },
    { id: 11, day: '8', type: '_cell-day', dayStr: '08' },
    { id: 12, day: '9', type: '_cell-day', dayStr: '09' },
    { id: 13, day: '10', type: '_cell-day _weekend', dayStr: '10' },
    { id: 14, day: '11', type: '_cell-day _weekend', dayStr: '11' },
    { id: 15, day: '12', type: '_cell-day', dayStr: '12' },
    { id: 16, day: '13', type: '_cell-day', dayStr: '13' },
    { id: 17, day: '14', type: '_cell-day', dayStr: '14' },
    { id: 18, day: '15', type: '_cell-day', dayStr: '15' },
    { id: 19, day: '16', type: '_cell-day', dayStr: '16' },
    { id: 20, day: '17', type: '_cell-day _weekend', dayStr: '17' },
    { id: 21, day: '18', type: '_cell-day _weekend', dayStr: '18' },
    { id: 22, day: '19', type: '_cell-day', dayStr: '19' },
    { id: 23, day: '20', type: '_cell-day', dayStr: '20' },
    { id: 24, day: '21', type: '_cell-day', dayStr: '21' },
    { id: 25, day: '22', type: '_cell-day', dayStr: '22' },
    { id: 26, day: '23', type: '_cell-day', dayStr: '23' },
    { id: 27, day: '24', type: '_cell-day _weekend', dayStr: '24' },
    { id: 28, day: '25', type: '_cell-day _weekend', dayStr: '25' },
    { id: 29, day: '26', type: '_cell-day', dayStr: '26' },
    { id: 30, day: '27', type: '_cell-day', dayStr: '27' },
    { id: 31, day: '28', type: '_cell-day', dayStr: '28' },
    { id: 32, day: '29', type: '_cell-day', dayStr: '29' },
    { id: 33, day: '30', type: '_cell-day', dayStr: '30' },
    { id: 34, day: '31', type: '_cell-day _weekend', dayStr: '31' }
  ];

  const serverDayNumber = task.date && task.date.includes('-') 
    ? task.date.split('-')[2].substring(0, 2) 
    : '';

  const currentTopic = task.topic || task.category || 'Web Design';
  const categoryColorClass = 
    currentTopic === 'Web Design' || currentTopic === 'Web Dev' ? '_orange' : 
    currentTopic === 'Research' ? '_green' : '_purple';

  const displayDate = task.date ? new Date(task.date).toLocaleDateString('ru-RU') : 'Срок не указан';

  return (
    <div className="pop-browse" id="popBrowse" style={{ display: 'block' }}>
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{task.title || 'Загрузка...'}</h3>
              <div className={`categories__theme theme-top ${categoryColorClass} _active-category`}>
                <p className={categoryColorClass}>{currentTopic}</p>
              </div>
            </div>

            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div className="status__theme _active-status _gray">
                  <p>{currentStatus}</p>
                </div>
              </div>
            </div>

            <div className="pop-browse__wrap">
              <div className="pop-browse__form form-browse" id="formBrowseCard">
                <div className="form-browse__block">
                  <p className="subttl">Описание задачи</p>
                  <div className="form-browse__area calendar__p">
                    {task.description || 'Описание отсутствует'}
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
                        const isTaskDate = item.dayStr === serverDayNumber && item.type !== '_other-month';
                        return (
                          <div
                            key={item.id}
                            className={`calendar__cell ${item.type} ${isTaskDate ? '_active-day' : ''}`}
                          >
                            {item.day}
                          </div>
                        );
                      })}
                    </div>
                  </div> 

                </div> 
              </div> 
            </div>

            <input type="hidden" id="datepick_value" value={task.date || ''} />
            <div className="calendar__period" style={{ marginBottom: '20px' }}>
              <p className="calendar__p date-end">
                Срок исполнения: <span className="date-control">{displayDate}</span>
              </p>
            </div>
            
            <div className="pop-browse__btn-browse">
              <div className="btn-group">
                <button className="pop-browse__btn-edit _btn-bor _hover03" onClick={handleGoToEdit}>
                  Редактировать задачу
                </button>
                <button className="pop-browse__btn-delete _btn-bor _hover03" onClick={handleDeleteTask}>
                  Удалить задачу
                </button>
              </div>
              <button className="pop-browse__btn-close _btn-bg _hover01" onClick={handleClose}>
                Закрыть
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* НАШ ОДОБРЕННЫЙ ТРИГГЕР: Невидимая картинка, которая 
          активирует все стили карточки просмотра из App.css на любом роуте! */}
      {isDark && (
        <img 
          src="images/logo_dark.png" 
          alt="theme-trigger" 
          style={{ display: 'none' }} 
        />
      )}
    </div>
  );
}
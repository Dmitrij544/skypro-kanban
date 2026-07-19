import { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ThemeContext from '../../ThemeContext'; // ДОБАВИЛИ: Импорт вашего контекста темы

export default function PopEdit({ cards, onSaveTask, onDeleteTask }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const task = cards?.find((t) => String(t._id || t.id) === String(id));

  const [currentStatus, setCurrentStatus] = useState(task?.status || 'Без статуса');
  const [description, setDescription] = useState(task?.description || '');

  // ДОБАВИЛИ: Чтение темы из вашего рабочего контекста
  const context = useContext(ThemeContext);
  const theme = context?.theme || 'light';
  const isDark = theme === 'dark';

  const daysData = [
    { id: 1, day: '29', type: '_other-month', fullDate: '2023-08-29T00:00:00.000Z', dayStr: '29' },
    { id: 2, day: '30', type: '_other-month', fullDate: '2023-08-30T00:00:00.000Z', dayStr: '30' },
    { id: 3, day: '31', type: '_other-month', fullDate: '2023-08-31T00:00:00.000Z', dayStr: '31' },
    { id: 4, day: '1', type: '_cell-day', fullDate: '2023-09-01T00:00:00.000Z', dayStr: '01' },
    { id: 5, day: '2', type: '_cell-day', fullDate: '2023-09-02T00:00:00.000Z', dayStr: '02' },
    { id: 6, day: '3', type: '_cell-day _weekend', fullDate: '2023-09-03T00:00:00.000Z', dayStr: '03' },
    { id: 7, day: '4', type: '_cell-day _weekend', fullDate: '2023-09-04T00:00:00.000Z', dayStr: '04' },
    { id: 8, day: '5', type: '_cell-day', fullDate: '2023-09-05T00:00:00.000Z', dayStr: '05' },
    { id: 9, day: '6', type: '_cell-day', fullDate: '2023-09-06T00:00:00.000Z', dayStr: '06' },
    { id: 10, day: '7', type: '_cell-day', fullDate: '2023-09-07T00:00:00.000Z', dayStr: '07' },
    { id: 11, day: '8', type: '_cell-day', fullDate: '2023-09-08T00:00:00.000Z', dayStr: '08' },
    { id: 12, day: '9', type: '_cell-day', fullDate: '2023-09-09T00:00:00.000Z', dayStr: '09' },
    { id: 13, day: '10', type: '_cell-day _weekend', fullDate: '2023-09-10T00:00:00.000Z', dayStr: '10' },
    { id: 14, day: '11', type: '_cell-day _weekend', fullDate: '2023-09-11T00:00:00.000Z', dayStr: '11' },
    { id: 15, day: '12', type: '_cell-day', fullDate: '2023-09-12T00:00:00.000Z', dayStr: '12' },
    { id: 16, day: '13', type: '_cell-day', fullDate: '2023-09-13T00:00:00.000Z', dayStr: '13' },
    { id: 17, day: '14', type: '_cell-day', fullDate: '2023-09-14T00:00:00.000Z', dayStr: '14' },
    { id: 18, day: '15', type: '_cell-day', fullDate: '2023-09-15T00:00:00.000Z', dayStr: '15' },
    { id: 19, day: '16', type: '_cell-day', fullDate: '2023-09-16T00:00:00.000Z', dayStr: '16' },
    { id: 20, day: '17', type: '_cell-day _weekend', fullDate: '2023-09-17T00:00:00.000Z', dayStr: '17' },
    { id: 21, day: '18', type: '_cell-day _weekend', fullDate: '2023-09-18T00:00:00.000Z', dayStr: '18' },
    { id: 22, day: '19', type: '_cell-day', fullDate: '2023-09-19T00:00:00.000Z', dayStr: '19' },
    { id: 23, day: '20', type: '_cell-day', fullDate: '2023-09-20T00:00:00.000Z', dayStr: '20' },
    { id: 24, day: '21', type: '_cell-day', fullDate: '2023-09-21T00:00:00.000Z', dayStr: '21' },
    { id: 25, day: '22', type: '_cell-day', fullDate: '2023-09-22T00:00:00.000Z', dayStr: '22' },
    { id: 26, day: '23', type: '_cell-day', fullDate: '2023-09-23T00:00:00.000Z', dayStr: '23' },
    { id: 27, day: '24', type: '_cell-day _weekend', fullDate: '2023-09-24T00:00:00.000Z', dayStr: '24' },
    { id: 28, day: '25', type: '_cell-day _weekend', fullDate: '2023-09-25T00:00:00.000Z', dayStr: '25' },
    { id: 29, day: '26', type: '_cell-day', fullDate: '2023-09-26T00:00:00.000Z', dayStr: '26' },
    { id: 30, day: '27', type: '_cell-day', fullDate: '2023-09-27T00:00:00.000Z', dayStr: '27' },
    { id: 31, day: '28', type: '_cell-day', fullDate: '2023-09-28T00:00:00.000Z', dayStr: '28' },
    { id: 32, day: '29', type: '_cell-day', fullDate: '2023-09-29T00:00:00.000Z', dayStr: '29' },
    { id: 33, day: '30', type: '_cell-day', fullDate: '2023-09-30T00:00:00.000Z', dayStr: '30' },
    { id: 34, day: '31', type: '_cell-day _weekend', fullDate: '2023-09-31T00:00:00.000Z', dayStr: '31' }
  ];

  const initialDayNumber = task?.date && task.date.includes('-') 
    ? task.date.split('-')[2].substring(0, 2) 
    : '30';

  const [selectedDay, setSelectedDay] = useState(
    daysData.find(d => d.dayStr === initialDayNumber && d.type !== '_other-month') || null
  );

  if (!task) return null;

  const statuses = [
    { name: 'Без статуса', colorClass: '_gray' },
    { name: 'Нужно сделать', colorClass: '_gray' },
    { name: 'В работе', colorClass: '_gray' },
    { name: 'Тестирование', colorClass: '_gray' },
    { name: 'Готово', colorClass: '_gray' }
  ];

  const handleClose = (e) => {
    if (e) e.preventDefault();
    navigate(`/task/${task._id || id}`); 
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    if (typeof onSaveTask === 'function') {
      onSaveTask({
        ...task,
        status: currentStatus,
        description: description,
        date: selectedDay ? selectedDay.fullDate : task.date
      });
    }
    navigate('/'); 
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if (typeof onDeleteTask === 'function') {
      onDeleteTask(task._id || id);
    }
    navigate('/'); 
  };

  const currentTopic = task.topic || task.category || 'Web Design';
  const categoryColorClass = 
    currentTopic === 'Web Design' || currentTopic === 'Web Dev' ? '_orange' : 
    currentTopic === 'Research' ? '_green' : '_purple';

  const displayDate = selectedDay 
    ? new Date(selectedDay.fullDate).toLocaleDateString('ru-RU') 
    : (task.date ? new Date(task.date).toLocaleDateString('ru-RU') : 'Срок не указан');

  return (
    <div className="pop-browse" id="popBrowse" style={{ display: 'block' }}>
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{task.title}</h3>
              <div className={`categories__theme theme-top ${categoryColorClass} _active-category`}>
                <p className={categoryColorClass}>{currentTopic}</p>
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
                      className={`status__theme ${isActive ? '_active-status _gray' : ''}`}
                      style={{ cursor: 'pointer' }}
                    >
                      <p>{status.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pop-browse__wrap pop-browse__wrap--edit">
              <form className="pop-new-card__form form-new" action="#" onSubmit={(e) => e.preventDefault()}>
                <div className="pop-edit__form form-edit" id="formEditCard">
                  <div className="form-edit__block">
                    <p className="form-edit__subttl">Описание задачи</p>
                    <textarea 
                      className="form-edit__area" 
                      value={description || ""} 
                      onChange={(e) => setDescription(e.target.value)} 
                      placeholder="Введите описание задачи..."
                    />
                  </div>
                </div>
              </form>

              <div className="pop-edit__calendar calendar-edit">
                <p className="calendar-edit__ttl subttl">Даты</p>
                <div className="calendar-edit__block">
                  <div className="calendar-edit__nav">
                    <div className="calendar-edit__month">Сентябрь 2023</div>
                  </div>
                  <div className="calendar-edit__content">
                    <div className="calendar-edit__days-names">
                      <div className="calendar-edit__day-name">пн</div>
                      <div className="calendar-edit__day-name">вт</div>
                      <div className="calendar-edit__day-name">ср</div>
                      <div className="calendar-edit__day-name">чт</div>
                      <div className="calendar-edit__day-name">пт</div>
                      <div className="calendar-edit__day-name -weekend-">сб</div>
                      <div className="calendar-edit__day-name -weekend-">вс</div>
                    </div>

                    <div className="calendar-edit__cells">
                      {daysData.map((item) => {
                        const isSelected = selectedDay?.id === item.id;
                        return (
                          <div
                            key={item.id}
                            onClick={() => item.type !== '_other-month' && setSelectedDay(item)}
                            className={`calendar-edit__cell ${item.type} ${isSelected ? '_active-day' : ''}`}
                            style={{ cursor: item.type !== '_other-month' ? 'pointer' : 'default' }}
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

            <div className="calendar__period" style={{ marginBottom: '20px' }}>
              <p className="calendar__p date-end">
                Срок исполнения: <span className="date-control">{displayDate}</span>
              </p>
            </div>
            
            <div className="pop-browse__btn-browse">
              <div className="btn-group">
                <button className="pop-browse__btn-edit _btn-bg _hover01" onClick={handleSaveChanges}>
                  Сохранить
                </button>
                <button className="pop-browse__btn-delete _btn-bor _hover03" onClick={handleDelete}>
                  Удалить задачу
                </button>
              </div>
              <button className="pop-browse__btn-close _btn-bor _hover03" onClick={handleClose}>
                Закрыть
              </button>
            </div>

          </div>
        </div>
      </div>

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
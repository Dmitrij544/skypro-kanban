import { useState } from 'react';
import Calendar from '../Calendar/Calendar'; 

function PopNewCard() {
  const [selectedCategory, setSelectedCategory] = useState('Web Design');

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            
            <a href="#" className="pop-new-card__close">✖</a>
            
            <div className="pop-new-card__wrap">
              
              <form className="pop-new-card__form form-new" id="formNewCard" action="#">
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">Название задачи</label>
                  <input className="form-new__input" type="text" name="name" id="formTitle" placeholder="Введите название задачи..." autoFocus />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">Описание задачи</label>
                  <textarea className="form-new__area" name="text" id="textArea" placeholder="Введите описание задачи..."></textarea>
                </div>
              </form>
              
              <Calendar />
              
            </div> 

            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                
                <div 
                  className={`categories__theme _orange ${selectedCategory === 'Web Design' ? '_active-category' : ''}`}
                  onClick={() => setSelectedCategory('Web Design')}
                  style={{ cursor: 'pointer' }}
                >
                  <p className="_orange">Web Design</p>
                </div>
                
                <div 
                  className={`categories__theme _green ${selectedCategory === 'Research' ? '_active-category' : ''}`}
                  onClick={() => setSelectedCategory('Research')}
                  style={{ cursor: 'pointer' }}
                >
                  <p className="_green">Research</p>
                </div>
                
                <div 
                  className={`categories__theme _purple ${selectedCategory === 'Copywriting' ? '_active-category' : ''}`}
                  onClick={() => setSelectedCategory('Copywriting')}
                  style={{ cursor: 'pointer' }}
                >
                  <p className="_purple">Copywriting</p>
                </div>
                
              </div>
            </div>

            <button className="header__btn-main-new _hover01" id="btnCreateTask" style={{ marginTop: '20px' }}>
              <a href="#">Создать задачу</a>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default PopNewCard;
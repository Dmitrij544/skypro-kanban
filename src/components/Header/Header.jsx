import { useState } from 'react';

function Header() {
  const [isUserSetOpen, setIsUserSetOpen] = useState(false);

  const toggleUserSet = (e) => {
    e.preventDefault(); 
    setIsUserSetOpen(!isUserSetOpen); 
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self"><img src="images/logo.png" alt="logo" /></a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self"><img src="images/logo_dark.png" alt="logo" /></a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </button>
            
            <a 
              href="#" 
              onClick={toggleUserSet} 
              className="header__user _hover02"
            >
              Ivan Ivanov
            </a>
            
            {isUserSetOpen && (
              <div className="header__pop-user-set pop-user-set" id="user-set-target" style={{ display: 'block' }}>
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03" onClick={() => setIsUserSetOpen(false)}>
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
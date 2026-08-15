import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  const isDark = localStorage.getItem("appTheme") === 'dark';

  return (
    <div className={`wrapper ${isDark ? '_dark' : 'light'}`}>
      <div className="container-signin">
        <div className="modal">
          <div className="modal__block">
            
            <div className="modal__ttl" style={{ marginBottom: '10px' }}>
              <h2 style={{ fontSize: '72px', lineHeight: '1', margin: 0, color: '#565EEF' }}>404</h2>
            </div>
            
            <p className="subttl" style={{ fontSize: '18px', marginBottom: '30px', fontWeight: '500', textAlign: 'center' }}>
              Страница не найдена
            </p>
            
            <Link to="/" className="modal__btn-enter _hover01" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
              На главную
            </Link>

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
};

export default NotFoundPage;
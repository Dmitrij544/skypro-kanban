import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import ThemeContext from '../../ThemeContext'; 
import AuthContext from '../../AuthContext';

function Header() {
  const navigate = useNavigate(); 
  const { theme, toggleTheme } = useContext(ThemeContext) || { theme: 'light', toggleTheme: () => {} };
  
  const { user } = useContext(AuthContext) || {}; 

  const handleLogoutClick = (e) => {
    e.preventDefault();
    navigate('/exit'); 
  };

  return (
    <header style={{ 
      background: theme === 'light' ? '#fff' : '#333', 
      color: theme === 'light' ? '#000' : '#fff', 
      padding: '20px', 
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <h1>TaskFlow</h1>
        {user && <p>Привет, {user.name}!</p>}
      </div>
      <div>
        <button onClick={toggleTheme}>
          Переключить на {theme === 'light' ? 'тёмную' : 'светлую'} тему
        </button>
        {user && (
          <button onClick={handleLogoutClick} style={{ marginLeft: '10px' }}>
            Выйти
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
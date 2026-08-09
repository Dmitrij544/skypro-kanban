import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeContext from '../../ThemeContext';
import AuthContext from '../../AuthContext'; 
import * as S from './PopUser.styled';

function PopUser() { 
  const navigate = useNavigate();

  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme || 'light';
  const isDark = theme === 'dark';

  const auth = useContext(AuthContext);
  const logout = auth?.logout || (() => {});

  const handleLogout = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (typeof logout === 'function') {
      logout();
    }
    
    navigate('/login');
  };

  const handleStay = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate('/'); 
  };

  return (
    <S.PopExit id="popExit" style={{ display: 'block' }}>
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTtl>
          <S.PopExitForm id="formExit" action="#" onSubmit={(e) => e.preventDefault()}>
            <S.PopExitFormGroup>
              
              <S.ExitYesBtn id="exitYes" onClick={handleLogout} style={{ cursor: 'pointer' }}>
                Да, выйти
              </S.ExitYesBtn>
              
              <S.ExitNoBtn id="exitNo" onClick={handleStay} style={{ cursor: 'pointer' }}>
                Нет, остаться
              </S.ExitNoBtn>

            </S.PopExitFormGroup>
          </S.PopExitForm>
        </S.PopExitBlock>
      </S.PopExitContainer>

      {isDark && (
        <img 
          src="images/logo_dark.png" 
          alt="theme-trigger" 
          style={{ display: 'none' }} 
        />
      )}
    </S.PopExit>
  );
}

export default PopUser;
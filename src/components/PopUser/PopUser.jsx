import { useNavigate } from 'react-router-dom';
import * as S from './PopUser.styled';

function PopUser({ setAuth }) { 
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (typeof setAuth === 'function') {
      setAuth(false); 
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
    </S.PopExit>
  );
}

export default PopUser;
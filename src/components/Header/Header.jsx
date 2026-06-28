import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Header.styled';

function Header() { 
  const [isUserSetOpen, setIsUserSetOpen] = useState(false);

  const toggleUserSet = (e) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    setIsUserSetOpen(!isUserSetOpen); 
  };

  return (
    <S.HeaderContainer>
      <S.Container>
        <S.HeaderBlock>
          
          <S.HeaderLogo>
            <Link to="/"><img src="images/logo.png" alt="logo" /></Link>
          </S.HeaderLogo>
          <S.HeaderLogo $dark>
            <Link to="/"><img src="images/logo_dark.png" alt="logo" /></Link>
          </S.HeaderLogo>
          
          <S.HeaderNav>
            <S.BtnMainNew id="btnMainNew">
              <Link to="/new-card" style={{ color: '#ffffff', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Создать новую задачу
              </Link>
            </S.BtnMainNew>
            
            <S.HeaderUser 
              as="button"
              type="button"
              onClick={toggleUserSet}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Ivan Ivanov
            </S.HeaderUser>
            
            {isUserSetOpen && (
              <S.PopUserSet id="user-set-target">
                <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
                <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
                <S.PopUserSetTheme>
                  <p>Темная тема</p>
                  <S.Checkbox name="checkbox" />
                </S.PopUserSetTheme>
                
                <S.PopUserBtn onClick={() => setIsUserSetOpen(false)}>
                  <Link to="/exit" style={{ color: 'inherit', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    Выйти
                  </Link>
                </S.PopUserBtn>
              </S.PopUserSet>
            )}
            
          </S.HeaderNav>
        </S.HeaderBlock>
      </S.Container>
    </S.HeaderContainer>
  );
}

export default Header;
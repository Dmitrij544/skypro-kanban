import { useState } from 'react';
import * as S from './Header.styled';

function Header() {
  const [isUserSetOpen, setIsUserSetOpen] = useState(false);

  const toggleUserSet = (e) => {
    e.preventDefault(); 
    setIsUserSetOpen(!isUserSetOpen); 
  };

  return (
    <S.HeaderContainer>
      <S.Container>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <a href="" target="_self"><img src="images/logo.png" alt="logo" /></a>
          </S.HeaderLogo>
          <S.HeaderLogo $dark>
            <a href="" target="_self"><img src="images/logo_dark.png" alt="logo" /></a>
          </S.HeaderLogo>
          <S.HeaderNav>
            <S.BtnMainNew id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </S.BtnMainNew>
            
            <S.HeaderUser 
              href="#" 
              onClick={toggleUserSet}
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
                  <a href="#popExit">Выйти</a>
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
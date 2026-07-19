import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../../ThemeContext';
import AuthContext from '../../AuthContext'; // ДОБАВИЛИ: Импорт контекста авторизации
import * as S from './Header.styled';

export function Header() { 
  const [isUserSetOpen, setIsUserSetOpen] = useState(false);

  // Читаем тему из контекста тем
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme || 'light';
  const toggleTheme = themeContext?.toggleTheme || (() => {});
  const isDark = theme === 'dark';

  // ИСПРАВЛЕНО: Читаем данные вошедшего пользователя из контекста авторизации
  const auth = useContext(AuthContext);
  const user = auth?.user || null;

  // Динамически берем имя пользователя, если его нет — ставим заглушку
  const userName = user?.name || "Ivan Ivanov";
  const userEmail = user?.email || "ivan.ivanov@gmail.com";

  return (
    <S.HeaderContainer>
      <S.Container>
        <S.HeaderBlock>
          
          <S.HeaderLogo>
            <Link to="/">
              <img src={isDark ? "images/logo_dark.png" : "images/logo.png"} alt="logo" />
            </Link>
          </S.HeaderLogo>
          
          <S.HeaderNav>
            <S.BtnMainNew id="btnMainNew">
              <Link to="/new-card">Создать новую задачу</Link>
            </S.BtnMainNew>
            
            {/* ИСПРАВЛЕНО: Шапка приветствует пользователя по имени (например, Анна) */}
            <S.HeaderUser type="button" onClick={() => setIsUserSetOpen(!isUserSetOpen)}>
              {user ? `Привет, ${userName}!` : userName}
            </S.HeaderUser>
            
            {isUserSetOpen && (
              <S.PopUserSet>
                <S.PopUserSetName>{userName}</S.PopUserSetName>
                <S.PopUserSetMail>{userEmail}</S.PopUserSetMail>
                <S.PopUserSetTheme>
                  <p>Темная тема</p>
                  <S.Checkbox 
                    type="checkbox"
                    id="user-menu-theme-checkbox"
                    checked={isDark} 
                    onChange={() => toggleTheme()}
                  />  
                </S.PopUserSetTheme>
                
                <S.PopUserBtn onClick={() => setIsUserSetOpen(false)}>
                  <Link to="/exit">Выйти</Link>
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
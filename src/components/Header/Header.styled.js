import styled from 'styled-components';

// Базовые общие стили для ховеров и кнопок, чтобы не дублировать код
const BaseButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
  transition: background-color 0.2s ease, color 0.2s ease;
`;

export const HeaderContainer = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const HeaderLogo = styled.div`
  display: ${props => (props.$dark ? 'none' : 'block')};
  margin-left: 5px;
  margin-top: 5px;
  img {
    width: 85px;
  }
`;

export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  margin-right: 18px;
`;

export const BtnMainNew = styled(BaseButton)`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565EEF; // Ваш фиолетовый цвет
  margin-right: 20px;

  a {
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    line-height: 14px;
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background-color: #33399b; // Ваш цвет из ._hover01
  }
`;

export const HeaderUser = styled.a`
  height: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: #565EEF;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s ease;

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.5px solid #565EEF;
    border-bottom: 1.5px solid #565EEF;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
    transition: border-color 0.2s ease;
  }

  &:hover {
    color: #33399b; // Ваш цвет из ._hover02
    
    &::after {
      border-left-color: #33399b;
      border-bottom-color: #33399b;
    }
  }
`;

export const PopUserSet = styled.div`
  display: block; // Заменяет дефолтный .pop-user-set:target { display: block }
  position: absolute;
  top: 42px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #FFF;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
`;

export const PopUserSetName = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const PopUserSetMail = styled.p`
  color: #94A6BE;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const PopUserSetTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  p {
    color: #000;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
  }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: #EAEEF6;
  outline: none;
  appearance: none;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #94A6BE;
    transition: 0.5s;
  }

  &:checked::before {
    left: 12px;
  }
`;

export const PopUserBtn = styled(BaseButton)`
  width: 72px;
  height: 30px;
  background: transparent;
  color: #565EEF;
  border-radius: 4px;
  border: 1px solid #565EEF;

  a {
    color: #565EEF;
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
    line-height: 28px;
  }

  &:hover {
    background-color: #33399b; 
    color: #FFFFFF;
    
    a {
      color: #FFFFFF;
    }
  }
`;


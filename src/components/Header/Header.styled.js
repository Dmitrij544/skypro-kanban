import styled from 'styled-components';

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
  border-bottom: 1px solid #eaeaea;
  transition: background-color 0.2s ease, border-color 0.2s ease;

  html:has(img[src*="logo_dark"]) & {
    background-color: #20202C;
    border-bottom: 1px solid #4E5566;
  }
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
`;

export const HeaderLogo = styled.div`
  margin-left: 5px;
  margin-top: 5px;
  img {
    width: 85px;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  position: relative;
`;

export const BtnMainNew = styled(BaseButton)`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565EEF; 
  margin-right: 20px;

  a {
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  &:hover {
    background-color: #33399b; 
  }
`;

export const HeaderUser = styled.button`
  height: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
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
    margin: -2px 0 0 5px;
  }

  &:hover {
    color: #33399b; 
    &::after {
      border-left-color: #33399b;
      border-bottom-color: #33399b;
    }
  }

  html:has(img[src*="logo_dark"]) & {
    color: #FFFFFF;
    
    &::after {
      border-left-color: #FFFFFF;
      border-bottom-color: #FFFFFF;
    }

    &:hover {
      color: #94A6BE;
      &::after {
        border-left-color: #94A6BE;
        border-bottom-color: #94A6BE;
      }
    }
  }
`;

export const PopUserSet = styled.div`
  position: absolute;
  top: 42px;
  right: 0;
  width: 213px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #FFF;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 24px;
  z-index: 10;
  transition: background-color 0.2s ease, border-color 0.2s ease;

  html:has(img[src*="logo_dark"]) & {
    background-color: #20202C;
    border: 0.7px solid #4E5566;
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.5);
  }
`;

export const PopUserSetName = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
  transition: color 0.2s ease;

  html:has(img[src*="logo_dark"]) & {
    color: #FFFFFF;
  }
`;

export const PopUserSetMail = styled.p`
  color: #94A6BE;
  font-size: 14px;
  margin-bottom: 12px;
`;

export const PopUserSetTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  p {
    color: #000;
    font-size: 14px;
    transition: color 0.2s ease;

    html:has(img[src*="logo_dark"]) & {
      color: #FFFFFF;
    }
  }
`;

export const Checkbox = styled.input`
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
    transition: 0.3s;
  }

  &:checked::before {
    left: 12px;
    background-color: #565EEF;
  }

  html:has(img[src*="logo_dark"]) & {
    background: #4E5566;
  }
`;

export const PopUserBtn = styled(BaseButton)`
  width: 72px;
  height: 30px;
  background: transparent;
  color: #565EEF;
  border-radius: 4px;
  border: 1px solid #565EEF;
  padding: 0;

  display: flex !important;
  margin: 20px auto 0 auto !important; 
  align-items: center;
  justify-content: center;

  a {
    color: #565EEF;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: color 0.2s ease;
  }

  &:hover {
    background-color: #565EEF !important; 
    border-color: #565EEF !important;
    
    a { 
      color: #FFFFFF !important; 
    }
  }

  /* ТЁМНАЯ ТЕМА */
  html:has(img[src*="logo_dark"]) & {
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background: transparent;
    
    a {
      color: #FFFFFF;
    }

    &:hover {
      background-color: #565EEF !important;
      border-color: #565EEF !important;
      
      a { 
        color: #FFFFFF !important; 
      }
    }
  }
`;
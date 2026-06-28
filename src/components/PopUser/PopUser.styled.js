import styled from 'styled-components';

const BaseButton = styled.button`
  width: 153px;
  height: 30px;
  border-radius: 4px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  cursor: pointer;
  transition: all 0.2s ease;

  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
`;

export const PopExit = styled.div`
  display: none; 
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;

  &:target {
    display: block;
  }
`;

export const PopExitContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 370px;
  width: 100%;
  padding: 50px 28px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const PopExitTtl = styled.div`
  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
    margin-bottom: 20px;
    color: #000000;
  }
`;

export const PopExitForm = styled.form`
  width: 100%;
`;

export const PopExitFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ExitYesBtn = styled(BaseButton)`
  background-color: #565EEF;
  border: none;
  color: #FFFFFF;
  margin-right: 10px;

  a {
    color: #FFFFFF;
  }

  &:hover {
    background-color: #33399b;
  }
`;

export const ExitNoBtn = styled(BaseButton)`
  background-color: transparent;
  border: 0.7px solid #565EEF;
  color: #565EEF;

  a {
    color: #565EEF;
  }

  &:hover {
    background-color: #33399b;
    color: #FFFFFF;
    
    a {
      color: #FFFFFF;
    }
  }
`;
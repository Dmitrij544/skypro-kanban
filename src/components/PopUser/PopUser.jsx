import * as S from './PopUser.styled';

function PopUser() {
  return (
    <S.PopExit id="popExit">
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTtl>
          <S.PopExitForm id="formExit" action="#">
            <S.PopExitFormGroup>
              <S.ExitYesBtn id="exitYes">
                <a href="modal/signin.html">Да, выйти</a>
              </S.ExitYesBtn>
              <S.ExitNoBtn id="exitNo">
                <a href="main.html">Нет, остаться</a>
              </S.ExitNoBtn>
            </S.PopExitFormGroup>
          </S.PopExitForm>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
}

export default PopUser;
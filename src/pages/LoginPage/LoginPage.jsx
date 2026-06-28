import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function LoginPage({ setAuth }) { 
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert('Пожалуйста, заполните все поля ввода.');
      return;
    }

    console.log('Данные для входа:', { email, password });

    if (typeof setAuth === 'function') {
      setAuth(true);
    }

    navigate('/');
  };

  return (
    <div className="container-signin">
      <div className="modal">
        <div className="modal__block">
          
          <div className="modal__ttl">
            <h2>Вход</h2>
          </div>

          <form className="modal__form-login" id="formLogIn" onSubmit={handleLogin}>
            
            <input 
              className="modal__input" 
              type="text" 
              name="login" 
              id="formlogin" 
              placeholder="Эл. почта"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <input 
              className="modal__input" 
              type="password" 
              name="password" 
              id="formpassword" 
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            <button type="submit" className="modal__btn-enter _hover01" id="btnEnter">
              Войти
            </button>
            
            <div className="modal__form-group">
              <p>Нужно зарегистрироваться?</p>
              <Link to="/register">Регистрируйтесь здесь</Link>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
}

export default LoginPage;
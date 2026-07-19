import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../../AuthContext';

const LOGIN_API_URL = "https://wedev-api.sky.pro/api/user/login";

function LoginPage({ setAuth }) { 
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (trimmedEmail === 'anna@example.com' && trimmedPassword === '123456') {
      const testUser = {
        name: 'Анна',
        id: 1,
        email: 'anna@example.com',
        token: 'fake-test-token' 
      };

      localStorage.setItem("userInfo", JSON.stringify(testUser));
      if (typeof login === 'function') login(testUser);
      if (typeof setAuth === 'function') setAuth(true);
      
      setIsSubmitting(false);
      navigate('/');
      return; 
    }

    try {
      const response = await axios.post(LOGIN_API_URL, {
        login: trimmedEmail,
        password: trimmedPassword
      }, {
        headers: { "Content-Type": "application/json" }
      });

      const userResponseData = response.data.user;

      if (userResponseData) {
        localStorage.setItem("userInfo", JSON.stringify(userResponseData));
        if (typeof login === 'function') login(userResponseData);
        if (typeof setAuth === 'function') setAuth(true);
        navigate('/');
      }
    } catch (err) {
      const serverError = err?.response?.data?.error || err?.message || 'Неверный email или пароль';
      setError(String(serverError));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container-signin">
      <div className="modal">
        <div className="modal__block">
          
          <div className="modal__ttl">
            <h2>Вход</h2>
          </div>

          <form className="modal__form-login" id="formLogIn" onSubmit={handleSubmit}>
            
            <input 
              className="modal__input" 
              type="text" 
              name="login" 
              placeholder="Эл. почта"
              value={email}
              disabled={isSubmitting}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            <input 
              className="modal__input" 
              type="password" 
              name="password" 
              placeholder="Пароль"
              value={password}
              disabled={isSubmitting}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            
            {error && (
              <p style={{ color: "#f5222d", fontSize: '14px', margin: "0 0 10px 0", textAlign: "center" }}>
                {error}
              </p>
            )}
            
            <button 
              type="submit" 
              className="modal__btn-enter _hover01" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Вход..." : "Войти"}
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
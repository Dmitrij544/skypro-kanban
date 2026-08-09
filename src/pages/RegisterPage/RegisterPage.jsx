import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import authService from "../../../servieces/auth";
import ThemeContext from "../../ThemeContext";
import AuthContext from "../../AuthContext"; 

function RegisterPage() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext) || {}; 

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const context = useContext(ThemeContext);
  const theme = context?.theme || 'light';
  const isDark = theme === 'dark';

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(''); 

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedName || !trimmedEmail || !trimmedPassword) {
      setError('Пожалуйста, заполните все поля ввода.');
      return;
    }

    try {
      setIsSubmitting(true);

      if (!authService || typeof authService.signUp !== 'function') {
        throw new Error('Сервис авторизации недоступен');
      }

      const userResponseData = await authService.signUp({
        name: trimmedName,
        login: trimmedEmail,
        password: trimmedPassword
      });

      if (userResponseData) {
        localStorage.setItem("userInfo", JSON.stringify(userResponseData));
        
        if (typeof login === 'function') {
          login(userResponseData);
        }

        navigate('/');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container-signup">
      <div className="modal">
        <div className="modal__block">
          
          <div className="modal__ttl">
            <h2>Регистрация</h2>
          </div>

          <form className="modal__form-login" id="formLogUp" onSubmit={handleRegister}>
            
            <input 
              className="modal__input first-name" 
              type="text" 
              name="first-name" 
              id="first-name" 
              placeholder="Имя"
              value={name}
              disabled={isSubmitting}
              onChange={(e) => setName(e.target.value)}
            />
            
            <input 
              className="modal__input login" 
              type="text" 
              name="login" 
              id="loginReg" 
              placeholder="Эл. почта"
              value={email}
              disabled={isSubmitting}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <input 
              className="modal__input password-first" 
              type="password" 
              name="password" 
              id="passwordFirst" 
              placeholder="Пароль"
              value={password}
              disabled={isSubmitting}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && (
              <p style={{ color: '#f5222d', fontSize: '14px', margin: '0 0 10px 0', textAlign: 'center' }}>
                {error}
              </p>
            )}
            
            <button 
              type="submit" 
              className="modal__btn-signup-ent _hover01" 
              id="SignUpEnter"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Регистрация...' : 'Зарегистрироваться'}
            </button>
            
            <div className="modal__form-group">
              <p>Уже есть аккаунт? <Link to="/login">Войдите здесь</Link></p>
            </div>

          </form>

        </div>
      </div>

      {isDark && (
        <img 
          src="images/logo_dark.png" 
          alt="theme-trigger" 
          style={{ display: 'none' }} 
        />
      )}
    </div>
  );
}

export default RegisterPage;
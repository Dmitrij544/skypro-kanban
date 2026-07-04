import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const USER_API_URL = "https://wedev-api.sky.pro/api/user";

async function signUp({ name, login, password }) {
   return axios.post(USER_API_URL, { name, login, password }, {
      headers: {
         "Content-Type": null
      }
   })
   .then(response => response.data.user)
   .catch(error => {
      const serverError = error?.response?.data?.error || error?.message || 'Ошибка регистрации';
      return Promise.reject(String(serverError));
   });
}

function RegisterPage({ setAuth }) {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(''); 

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError('Пожалуйста, заполните все поля ввода.');
      return;
    }

    try {
      setIsSubmitting(true);

      const userResponseData = await signUp({
        name: name,
        login: email,
        password: password
      });

      if (userResponseData) {
        localStorage.setItem("userInfo", JSON.stringify(userResponseData));
        
        if (typeof setAuth === 'function') {
          setAuth(true);
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
    </div>
  );
}

export default RegisterPage;
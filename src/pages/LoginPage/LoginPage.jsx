import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const USER_API_URL = "https://wedev-api.sky.pro/api/user";

async function signIn({ login, password }) {
   return axios.post(`${USER_API_URL}/login`, { login, password }, {
      headers: {
         "Content-Type": null
      }
   })
   .then(response => response.data.user)
   .catch(error => {
      const serverError = error?.response?.data?.error || error?.message || "Неверный логин или пароль";
      return Promise.reject(String(serverError));
   });
}

function LoginPage({ setAuth }) { 
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Пожалуйста, заполните все поля ввода.");
      return;
    }

    try {
      setIsSubmitting(true);

      const userResponseData = await signIn({ 
        login: email, 
        password: password 
      });

      if (userResponseData) {
        localStorage.setItem("userInfo", JSON.stringify(userResponseData));
        
        if (typeof setAuth === "function") {
          setAuth(true);
        }
        
        navigate("/");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
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

          <form className="modal__form-login" id="formLogIn" onSubmit={handleLogin}>
            
            <input 
              className="modal__input" 
              type="text" 
              name="login" 
              id="formlogin" 
              placeholder="Эл. почта"
              value={email}
              disabled={isSubmitting}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <input 
              className="modal__input" 
              type="password" 
              name="password" 
              id="formpassword" 
              placeholder="Пароль"
              value={password}
              disabled={isSubmitting}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            {error && (
              <p style={{ color: "#f5222d", fontSize: '14px', margin: "0 0 10px 0", textAlign: "center" }}>
                {error}
              </p>
            )}
            
            <button 
              type="submit" 
              className="modal__btn-enter _hover01" 
              id="btnEnter"
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
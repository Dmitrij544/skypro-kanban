import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import authService from "../servieces/auth"; 
import BaseInput from "./BaseInput";
import BaseButton from "./BaseButton";
import AuthContext from "./AuthContext";

const AuthForm = ({ isSignUp }) => {
   const navigate = useNavigate();
   const { login } = useContext(AuthContext) || {};

   const [formData, setFormData] = useState({
      name: "",
      login: "",
      password: "",
   });

   const [errors, setErrors] = useState({
      name: "",
      login: "",
      password: "",
   });

   const [error, setError] = useState("");

   const validateForm = () => {
      const newErrors = { name: "", login: "", password: "" };
      let isValid = true;

      if (isSignUp && !formData.name.trim()) {
         newErrors.name = "Заполните поле";
         setError("Заполните все поля");
         isValid = false;
      }
      if (!formData.login.trim()) {
         newErrors.login = "Заполните поле";
         setError("Заполните все поля");
         isValid = false;
      }
      if (!formData.password.trim()) {
         newErrors.password = "Заполните поле";
         setError("Заполните все поля");
         isValid = false;
      }

      setErrors(newErrors);
      return isValid;
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
      setErrors({ ...errors, [name]: false });
      setError("");
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validateForm()) {
         return;
      }

      setError("");
      
      const trimmedLogin = formData.login.trim();
      const trimmedPassword = formData.password.trim();

      try { 
         const data = !isSignUp
            ? await authService.signIn({ login: trimmedLogin, password: trimmedPassword })
            : await authService.signUp({ name: formData.name.trim(), login: trimmedLogin, password: trimmedPassword });

         if (data) {
            localStorage.setItem("userInfo", JSON.stringify(data));
            
            if (typeof login === 'function') {
               login(data);
            }
            
            navigate("/");
         }
      } catch (err) {
         const errStr = String(err);
         if (errStr.includes("400") || errStr.toLowerCase().includes("bad request") || errStr.includes("найден")) {
            setError("Пользователя с такими данными нет. Проверьте логин или зарегистрируйтесь.");
         } else {
            setError(errStr);
         }
      }
   };

   return (
      <div className="bg">
         <div className="modal">
            <div className="logo">SkyWords</div>
            <div className="wrapper">
               <h2 className="title">{isSignUp ? "Регистрация" : "Вход"}</h2>
               <form className="form" id="form" onSubmit={handleSubmit}>
                  <div className="input-wrapper">
                     {isSignUp && (
                        <BaseInput
                           error={errors.name}
                           type="text"
                           name="name"
                           id="formname"
                           placeholder="Имя"
                           value={formData.name}
                           onChange={handleChange}
                        />
                     )}
                     <BaseInput
                        error={errors.login}
                        type="text"
                        name="login"
                        id="formlogin"
                        placeholder="Эл. почта"
                        value={formData.login}
                        onChange={handleChange}
                     />
                     <BaseInput
                        error={errors.password}
                        type="password"
                        name="password"
                        id="formpassword"
                        placeholder="Пароль"
                        value={formData.password}
                        onChange={handleChange}
                     />
                  </div>
                  
                  {error && <p style={{ color: "red", textAlign: "center", marginBottom: "15px" }}>{error}</p>}
                  
                  <BaseButton
                     type="secondary"
                     fullWidth={true}
                     text={isSignUp ? "Зарегистрироваться" : "Войти"}
                  />

                  {!isSignUp && (
                     <div className="form-group">
                        <p>Нужно зарегистрироваться?</p>
                        <Link to="/register">Регистрируйтесь здесь</Link>
                     </div>
                  )}
                  {isSignUp && (
                     <div className="form-group">
                        <p>Есть аккаунт? <Link to="/login">Войдите здесь</Link></p>
                     </div>
                  )}
               </form>
            </div>
         </div>
      </div>
   );
};

export default AuthForm;
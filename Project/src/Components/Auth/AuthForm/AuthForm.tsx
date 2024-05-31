import { useEffect, useRef, useState } from "react";
import './AuthForm.css'
import { RegisterForm } from "../RegisterForm";
import { LoginForm } from "../LoginForm";
import { Logo } from "../../../ui/Logo";

export const AuthForm = () => {
  const [authType, setAuthType] = useState<string>('register');

  const outsideAuth: any = useRef(null)

  const handleClickAuthType = () => {
    setAuthType((prevState) =>
      prevState === 'register' ? 'auth' : 'register',
    )
  }

  const handleClose = () => {
    
  }

  const handleDocumentClick = (event: Event) => {
      if (outsideAuth.current && !outsideAuth.current.contains(event.target)) {
        console.log('dadad');
      }
  }

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick)
    return () => {
      document.addEventListener('click', handleDocumentClick)
    }
  }, [])


  return (
    <div className="auth-form-wrapper">
      <div className="auth-form" ref={outsideAuth}>
        <Logo className="auth-form__logo" />
        {authType === "register" ?
          <p className="auth-form__title">
            Регистрация
          </p>
          : ''}
        {authType === "register" ? <RegisterForm /> : <LoginForm />}
        <div className="auth-form__info">
          <button className="auth-form__btn-info btn-reset" onClick={handleClickAuthType}>
            {authType === "register" ? "У меня есть пароль" : "Регистрация"}
          </button>
        </div>
        <button className="auth-form__close" onClick={handleClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z" fill="black" />
          </svg>
        </button>
      </div>
    </div>
  )
}

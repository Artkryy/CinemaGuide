import { FC, useRef, useState } from "react";
import './AuthForm.css'
import { RegisterForm } from "../RegisterForm";
import { LoginForm } from "../LoginForm";
import { Logo } from "../../../ui/Logo";
import { SuccessRegister } from "../SuccessRegister";

interface TAuthFormProps {
  active: boolean;
  setActive: any;
}

export const AuthForm: FC<TAuthFormProps> = ({ active, setActive }) => {
  const [authType, setAuthType] = useState<string>('register');
  const [successRegister, setSuccessRegister] = useState<boolean>(false)

  const outsideAuth: any = useRef(null)

  const handleClickAuthType = () => {
    setAuthType((prevState) =>
      prevState === 'register' ? 'auth' : 'register',
    )
  }


  return (
    <div className={active ? "auth-form-wrapper active" : "auth-form-wrapper"} onClick={() => setActive(false)}>
      <div className={active ? "auth-form active" : "auth-form"} ref={outsideAuth} onClick={e => e.stopPropagation()}>
        <Logo className="auth-form__logo" />
        {authType === "register" ?
          <p className="auth-form__title">
            {successRegister ? '' : 'Регистрация'}
          </p>
          : ''}
        {authType === "register" ? (
          successRegister ? (
            <SuccessRegister authType={setAuthType} />
          ) : (
            <RegisterForm successRegister={setSuccessRegister} />
          )
        ) : <LoginForm />}
        <div className="auth-form__info">
          <button className="auth-form__btn-info btn-reset" onClick={handleClickAuthType}>
            {authType === "register" ? (successRegister ? '' : "У меня есть пароль") : "Регистрация"}
          </button>
        </div>
        <button className="auth-form__close btn-reset" onClick={() => setActive(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z" fill="black" />
          </svg>
        </button>
      </div>
    </div>
  )
}

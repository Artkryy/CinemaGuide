import { FormEventHandler, useState } from 'react';
import './RegisterForm.css'
import { FormField } from '../FormField';
import * as EmailValidator from "email-validator";
import { Button } from '../../../ui/Button';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../../../api/user';
import { queryClient } from '../../../api/queryClient';

export const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [usernameError, setUsernameError] = useState<string | undefined>("");
  const [surnameError, setSurnameError] = useState<string | undefined>("");
  const [emailError, setEmailError] = useState<string | undefined>("");
  const [passwordError, setPasswordError] = useState<string | undefined>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string | undefined>("");

  const registerMutation = useMutation(
    {
      mutationFn: () => registerUser(email, password, username, surname),
    },
    queryClient
  );

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (username.length < 2) {
      setUsernameError("Имя должно быть более 2 символов");
    } else if (surname.length < 2) {
      setSurnameError("Фамилия должна быть более 2 символов");
    } else if (!EmailValidator.validate(email)) {
      setEmailError("Введите корректный E-mail");
    } else if (password.length < 8) {
      setPasswordError("Пароль должен содержать не менее 8 символов");
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('Пароли не совпадают')
    } else {
      registerMutation.mutate();
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <FormField>
        <input
          className='register-form__inp'
          type="text"
          name="email"
          placeholder='Электронная почта'
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(undefined);
          }}
          value={email}
          required
        />
        <svg className='register__inp-mail' width="24" height="24" viewBox="0 0 24 24" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z" />
        </svg>
      </FormField>
      {emailError && (
        <span style={{ color: "red", fontSize: "14px" }}>{emailError}</span>
      )}
      <FormField >
        <input
          className='register-form__inp'
          type="text"
          name="username"
          placeholder='Имя'
          onChange={(e) => {
            setUsername(e.target.value);
            setUsernameError(undefined);
          }}
          value={username}
          required
        />
        <svg className='register__inp-user' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" />
        </svg>
      </FormField>
      {usernameError && (
        <span style={{ color: "red", fontSize: "14px" }}>{usernameError}</span>
      )}
      <FormField>
        <input
          className='register-form__inp'
          type="text"
          name="surname"
          placeholder='Фамилия'
          onChange={(e) => {
            setSurname(e.target.value);
            setSurnameError(undefined);
          }}
          value={surname}
          required
        />
        <svg className='register__inp-user' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" />
        </svg>
      </FormField>
      {surnameError && (
        <span style={{ color: "red", fontSize: "14px" }}>{surnameError}</span>
      )}
      <FormField>
        <input
          className='register-form__inp'
          type="password"
          name="password"
          placeholder='Пароль'
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError(undefined);
          }}
          value={password}
          required
        />
        <svg className='register__inp-key' width="24" height="24" viewBox="0 0 24 24" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M12.917 13C12.441 15.8377 9.973 18 7 18C3.68629 18 1 15.3137 1 12C1 8.68629 3.68629 6 7 6C9.973 6 12.441 8.16229 12.917 11H23V13H21V17H19V13H17V17H15V13H12.917ZM7 16C9.20914 16 11 14.2091 11 12C11 9.79086 9.20914 8 7 8C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16Z" />
        </svg>
      </FormField>
      {passwordError && (
        <span style={{ color: "red", fontSize: "12px" }}>{passwordError}</span>
      )}
      <FormField>
        <input
          className='register-form__inp'
          type="password"
          name="password"
          placeholder='Подтвердите пароль'
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setConfirmPasswordError(undefined);
          }}
          value={confirmPassword}
          required
        />
        <svg className='register__inp-key' width="24" height="24" viewBox="0 0 24 24" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M12.917 13C12.441 15.8377 9.973 18 7 18C3.68629 18 1 15.3137 1 12C1 8.68629 3.68629 6 7 6C9.973 6 12.441 8.16229 12.917 11H23V13H21V17H19V13H17V17H15V13H12.917ZM7 16C9.20914 16 11 14.2091 11 12C11 9.79086 9.20914 8 7 8C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16Z" />
        </svg>
      </FormField>
      {confirmPasswordError && (
        <span style={{ color: "red", fontSize: "14px" }}>{confirmPasswordError}</span>
      )}
      {registerMutation.error && (
        <span style={{ color: "red", fontSize: "14px" }}>
          {registerMutation.error.message}
        </span>
      )}
      <Button className='register-form__btn btn btn-reset' type="submit">
        Создать аккаунт
      </Button>
    </form>
  );
}

import { FC } from 'react';
import { Button } from '../../../ui/Button'
import './SuccessRegister.css'

interface TSuccessRegisterProps {
  authType: any;
}

export const SuccessRegister: FC<TSuccessRegisterProps> = ({ authType }) => {
  return (
    <>
      <p className="success-form__title">Регистрация завершена</p>
      <p className="success-form__message">Используйте вашу электронную почту для входа</p>
      <Button className='success-form__btn btn btn-reset' onClick={() => authType('login')}>Войти</Button>
    </>
  )
}

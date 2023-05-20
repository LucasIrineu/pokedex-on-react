import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [failedLogin, setFailedLogin] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    const handleCredentials = () => {
      const emailRegex = /\S+@\S+\.\S+/;
      const isEmailValid = email.match(emailRegex);
      const PASSWORD_LENGTH = 6;

      if (isEmailValid && password.length >= PASSWORD_LENGTH) {
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
      }
    }
    handleCredentials();
  })


  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    localStorage.setItem('user', JSON.stringify({ email }))
    setIsLogged(true);
  }

  useEffect(() => {
    setFailedLogin(false);
  }, [email, password])

  if (isLogged) return <Navigate to='/home' />

  return (
    <div className="homePage">
      <form className="login-form">
      <h1 className='greeting'>Olá Treinador!</h1>
      <label htmlFor='email-input'>
        <input
          type={'text'}
          value={ email }
          onChange= { ({ target: { value } }) => setEmail(value) }
          placeholder='Email'
          className="email-input"
        />
      </label>

      <label htmlFor='password-input'>
        <input
          type={'password'}
          value={ password }
          onChange= { ({ target: { value } }) => setPassword(value) }
          placeholder='Senha'
          className="email-input"
        />
      </label>
      {
        (failedLogin) ? (
          <p>
            {`O endereço de email ou senha não são válidos.
            Por favor, tente novamente.`}
            </p>
        ) : null
      }
      <button
        type='submit'
        onClick={ (event) => handleClick(event) }
        disabled={ buttonDisabled }
        className='login-button'
      >
        Entrar
      </button>
      </form>
    </div>
  );
}

export default Login;

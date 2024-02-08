"use client"

import styles from '../login.module.css';
import { authenticate } from '../../../lib/actions'
import { useState } from 'react';

const LoginForm = () => {
  const [error, setError] = useState();

  const handleLogin = async (formData) => {
    const error = await authenticate(formData);
    error && setError(error);
  }

  return (
    <form action={handleLogin} className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder='username' name='username' />
      <input type="password" placeholder='password' name='password' />
      <button>Login</button>
      {error && error}
    </form>
  )
}

export default LoginForm;
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/logoLcPng.png';
import { useAuth } from '../../hooks/AuthContext';
import api from '../../services/backApi';

import { Container, Content, Background } from './styles';

function initialState() {
  return { user: '', password: '' };
}

const SignIn: React.FC = () => {
  const [values, setValues] = useState(initialState);

  const { signIn, data } = useAuth();

  console.log(data);

  function onChange(event: any) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Let's Code" />

        <form>
          <h1>Faça seu login!</h1>

          <input
            name="user"
            placeholder="Usuario"
            onChange={onChange}
            value={values.user}
          />

          <input
            name="password"
            type="password"
            placeholder="Senha"
            onChange={onChange}
            value={values.password}
          />

          <button
            type="button"
            onClick={() =>
              signIn({ login: values.user, senha: values.password })
            }
          >
            Entrar
          </button>

          <a href="https://letscode.com.br/">Esqueci minha senha</a>
        </form>

        <a href="https://letscode.com.br/">
          <FiLogIn />
          Criar conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};
export default SignIn;

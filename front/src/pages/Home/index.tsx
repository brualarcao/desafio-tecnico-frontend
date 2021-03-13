/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { FiArrowRight, FiArrowLeft, FiTrash } from 'react-icons/fi';
import { useAuth } from '../../hooks/AuthContext';
import {
  Container,
  TopBar,
  Content,
  NewCardContainer,
  TodoCardContainer,
  DoingCardContainer,
  DoingCard,
  DoneCardContainer,
  DoneCard,
  ButtonsArea,
  NewCard,
  TodoCard,
  Typography,
} from './styles';
import logoImg from '../../assets/logoLcPng.png';

interface DataApi {
  titulo: string;
  conteudo: string;
  lista: string;
  id: string;
}

const Home: React.FC = () => {
  const { listApi } = useAuth();
  const [lists, setLists] = useState(listApi);

  const onChange = (state: string, id: string) => {
    if (lists) {
      const newTodoList = lists.map(todo => {
        if (todo.id === id) {
          // eslint-disable-next-line no-param-reassign
          todo.lista = state;
        }
        return todo;
      });
      setLists(newTodoList);
    }
  };

  const onDelete = (id: string) => {
    if (lists) {
      const newTodoList = lists.filter(todo => {
        return todo.id !== id;
      });
      setLists(newTodoList);
    }
  };

  return (
    <Container>
      <TopBar>
        <img src={logoImg} alt="Let's Code" />
      </TopBar>
      <Content>
        <NewCardContainer>
          <Typography>Novo</Typography>
          <NewCard>
            <input type="text" placeholder="Título" />
            <input type="text" placeholder="Conteúdo" />
            <button type="submit">Adicionar</button>
          </NewCard>
        </NewCardContainer>

        <TodoCardContainer>
          <Typography>To Do</Typography>
          {lists
            ? lists
                .filter(l => l.lista === 'ToDo')
                .map(list => (
                  <TodoCard>
                    <input type="text" placeholder={list.titulo} />
                    <input type="text" placeholder={list.conteudo} />
                    <ButtonsArea>
                      <button
                        onClick={() => {
                          onDelete(list.id);
                        }}
                        type="button"
                      >
                        <FiTrash />
                      </button>
                      <button
                        onClick={() => {
                          onChange('Doing', list.id);
                        }}
                        type="button"
                      >
                        <FiArrowRight />
                      </button>
                    </ButtonsArea>
                  </TodoCard>
                ))
            : null}
        </TodoCardContainer>

        <DoingCardContainer>
          <Typography>Doing</Typography>
          {lists
            ? lists
                .filter(l => l.lista === 'Doing')
                .map(list => (
                  <DoingCard>
                    <input type="text" placeholder={list.titulo} />
                    <input type="text" placeholder={list.conteudo} />
                    <ButtonsArea>
                      <button
                        onClick={() => {
                          onChange('ToDo', list.id);
                        }}
                        type="button"
                      >
                        <FiArrowLeft />
                      </button>
                      <button
                        onClick={() => {
                          onDelete(list.id);
                        }}
                        type="button"
                      >
                        <FiTrash />
                      </button>
                      <button
                        onClick={() => {
                          onChange('Done', list.id);
                        }}
                        type="button"
                      >
                        <FiArrowRight />
                      </button>
                    </ButtonsArea>
                  </DoingCard>
                ))
            : null}
        </DoingCardContainer>

        <DoneCardContainer>
          <Typography>Done</Typography>
          {lists
            ? lists
                .filter(l => l.lista === 'Done')
                .map(list => (
                  <DoneCard>
                    <input type="text" placeholder={list.titulo} />
                    <input type="text" placeholder={list.conteudo} />
                    <ButtonsArea>
                      <button
                        onClick={() => {
                          onChange('Doing', list.id);
                        }}
                        type="button"
                      >
                        <FiArrowLeft />
                      </button>
                      <button
                        onClick={() => {
                          onDelete(list.id);
                        }}
                        type="button"
                      >
                        <FiTrash />
                      </button>
                    </ButtonsArea>
                  </DoneCard>
                ))
            : null}
        </DoneCardContainer>
      </Content>
    </Container>
  );
};

export default Home;

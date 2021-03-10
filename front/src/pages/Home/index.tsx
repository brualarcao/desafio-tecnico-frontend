import React, { useState } from 'react';
import {
  FiPlusCircle,
  FiArrowRight,
  FiArrowLeft,
  FiDelete,
  FiEdit,
  FiTrash,
} from 'react-icons/fi';
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
import loadList from '../../services/api';

interface Task {
  id: number;
  titulo: string;
  conteudo: string;
  lista: string;
}

const Home: React.FC = () => {
  const [lists, setlists] = useState(loadList());
  const [toDo, setToDo] = useState<[Task]>();
  const [doing, setDoing] = useState<[Task]>();
  const [done, setDone] = useState<[Task]>();

  const listToDo = lists.filter(function (list) {
    return list.lista === 'ToDo';
  });

  const listDoing = lists.filter(function (list) {
    return list.lista === 'Doing';
  });

  const listDone = lists.filter(function (list) {
    return list.lista === 'Done';
  });

  console.log('Todo : ', listToDo);
  console.log('Doing : ', listDoing);
  console.log('Done : ', listDone);

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
          {listToDo.map(list => (
            <TodoCard>
              <input type="text" placeholder={list.titulo} />
              <input type="text" placeholder={list.conteudo} />
              <ButtonsArea>
                <button type="button">
                  <FiTrash />
                </button>
                <button type="button">
                  <FiArrowRight />
                </button>
              </ButtonsArea>
            </TodoCard>
          ))}
        </TodoCardContainer>

        <DoingCardContainer>
          <Typography>Doing</Typography>
          {listDoing.map(list => (
            <DoingCard>
              <input type="text" placeholder={list.titulo} />
              <input type="text" placeholder={list.conteudo} />
              <ButtonsArea>
                <button type="button">
                  <FiArrowLeft />
                </button>
                <button type="button">
                  <FiTrash />
                </button>
                <button type="button">
                  <FiArrowRight />
                </button>
              </ButtonsArea>
            </DoingCard>
          ))}
        </DoingCardContainer>

        <DoneCardContainer>
          <Typography>Done</Typography>
          {listDone.map(list => (
            <DoneCard>
              <input type="text" placeholder={list.titulo} />
              <input type="text" placeholder={list.conteudo} />
              <ButtonsArea>
                <button type="button">
                  <FiArrowLeft />
                </button>
                <button type="button">
                  <FiTrash />
                </button>
              </ButtonsArea>
            </DoneCard>
          ))}
        </DoneCardContainer>
      </Content>
    </Container>
  );
};

export default Home;

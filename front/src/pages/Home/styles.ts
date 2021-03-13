import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  place-content: center;
`;

export const Typography = styled.h1`
  color: #fdd400;
  font-weight: 600;
  margin: 6px;

  align-self: center;
`;

export const TopBar = styled.div`
  display: flex;
  flex: 1;

  place-content: center;

  height: 60px;
  margin-bottom: 4px;
  margin-top: 4px;
  border-bottom: 2px solid #fdd400;
  padding-bottom: 6px;

  img {
    max-width: 360px;
    max-height: 24px;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const NewCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px;
  border-right: 2px solid #fdd400;

  min-height: 100vh;
  height: 100%;
  width: 25%;
`;

export const NewCard = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid #fdd400;
  border-radius: 12px;

  place-content: center;

  padding: 6px;

  input {
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    color: #fdd400;
    place-content: center;

    & + input {
      margin-top: 8px;
      height: 108px;
    }
  }
  button {
    background: #fdd400;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    place-content: center;
    color: #312e38;
    width: 100%;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#fdd400')};
    }
  }
`;

export const TodoCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px;
  border-right: 2px solid #fdd400;
  border-left: 2px solid #fdd400;

  min-height: 100vh;
  height: 100%;
  width: 25%;
`;

export const TodoCard = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid #fdd400;
  border-radius: 12px;

  place-content: center;

  margin-bottom: 8px;

  padding: 6px;

  input {
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    color: #fdd400;
    place-content: center;

    & + input {
      margin-top: 8px;
      height: 108px;
    }
  }
  button {
    background: #fdd400;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    place-content: center;
    color: #312e38;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#fdd400')};
    }
  }
`;

export const ButtonsArea = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const DoingCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px;
  border-right: 2px solid #fdd400;
  border-left: 2px solid #fdd400;

  min-height: 100vh;
  height: 100%;
  width: 25%;
`;

export const DoingCard = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid #fdd400;
  border-radius: 12px;

  place-content: center;

  margin-bottom: 8px;

  padding: 6px;

  input {
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    color: #fdd400;
    place-content: center;

    & + input {
      margin-top: 8px;
      height: 108px;
    }
  }
  button {
    background: #fdd400;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    place-content: center;
    color: #312e38;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#fdd400')};
    }
  }
`;

export const DoneCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px;
  border-left: 2px solid #fdd400;

  min-height: 100vh;
  height: 100%;
  width: 25%;
`;

export const DoneCard = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid #fdd400;
  border-radius: 12px;

  place-content: center;

  margin-bottom: 8px;

  padding: 6px;

  input {
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    color: #fdd400;
    place-content: center;

    & + input {
      margin-top: 8px;
      height: 108px;
    }
  }
  button {
    background: #fdd400;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    place-content: center;
    color: #312e38;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#fdd400')};
    }
  }
`;

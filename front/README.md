<h1 align="center">
  <a href="https://letscode.com.br/">
  <img alt="Logo" src="https://letscode.com.br/images/logoLcPng.png" width="200px">
  </a>
</h1>

<h3 align="center">
  Desafio para desenvolvedor front-end na Let's Code.
</h3>




<p align="center">
  <a href="#about">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#started">Preparando o ambiente</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#use">Utilizando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<div id="about"></div>
## 💇🏻‍♂️ Sobre o desafio

O desafio consiste em criar uma dashboard que atuaria como um quadro de tasks que podem ser acompanhadas com os estados de To Do, Doing e Done. Podendo inserir novos cards, editar os existentes, mover os mesmos para os estados disponíveis e por fim, excluir quando a tarefa for concluída.


<div id="technologies"></div>
## 🚀 Tecnologias

Tecnologias utilizadas para a construção do projeto:

- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [Styled-Components](https://styled-components.com/)
- [ReactJS](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://www.npmjs.com/package/axios)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)


<div id="started"></div>
## 💻 Preparando tudo!

### Requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)

**Clone o projeto e acesse a pasta**

```bash
$ git clone https://github.com/brualarcao/desafio-tecnico-frontend.git && cd desafio-tecnico-frontend/front
```


**Siga os comandos abaixo para instalar as dependencias**

```bash
# Instalando as dependencias
$ yarn


# Assim que terminar, você pode iniciar o projeto com o comando abaixo
$ yarn start

# Projeto iniciado! Você pode acessar o mesmo pelo endereço (http://localhost.com:3000) em seu navegador.
```



<div id="use"></div>
### Utilizando

### O uso consiste em gerenciar os cards entre os estados, excluir e adicionar novas tasks.

**Para que a dashboard consiga fornecer os cards, é necessário rodar a API que está localizada na pasta BACK desse repositório e seguir os passos para inicialização.**

Lembrando que, infelizmente, não consegui finalizar alguns requisitos e com isso, para realizar a inserção de cards na API após a mesma estar rodando, é necessário o envio dos dados do card por um software (Insomnia no meu caso, Postman ou algo semelhante) que fará o envio da rota POST e inserindo os cards que serão representados na dashboard.

Primeiramente, será necessário adquirir o token na rota: (POST) http://0.0.0.0:5000/login/ <br>
Enviando o body da seguinte forma:
```bash
{ "login":"letscode", "senha":"lets@123"}
```
E o retorno da rota será o token, que deve ser incluído em todas as requisições como:
```bash
Authorization : 'Bearer <token>'
```

Utilizando a rota: (POST)      http://0.0.0.0:5000/cards/<br>
Informe no body o seguinte json:
```bash
{
    "titulo": string,
    "conteudo": string,
    "lista": string
}
```
Onde o titulo e conteudo ficariam a seu critério e, <br>
o atributo lista, deve ser exatamente <br>

ToDo - lista de tasks a serem feitas<br>
Doing - lista de tasks sendo feitas<br>
Done - lista de itens finalizadas <br>

Não esqueça de fornecer o token obtido após autenticação na rota de login.<br>

Feito isso, com os cards criados, agora é possível acessar o localhost onde o projeto está rodando e realizar o login com as credenciais abaixo e assim, obter acesso a dashboard.<br>

Credenciais:<br>
Login: letscode<br>
Senha: lets@123<br>

<div id="Obs"></div>
### Observações

Infelizmente tive problemas de saúde que me permitiram iniciar o desafio somente na tarde de terça, não que seja desculpa pois fiquei todos esses dias tentando realizar a proposta e não estou satisfeito com o que estou enviando a vocês, haha
Primeiramente gostaria de agradecer a oportunidade e deixar registrado que pude aprender muita coisa com o desafio proposto, foi de grande valor para mim independente de qualquer coisa.

E não menos importante, tive problemas com a interpretação do exercício e quando notei já era tarde demais para corrigir.
Realizei o projeto todo na ideia de que deveria receber os dados da API e trabalhar com eles localmente, porém, só depois notei que não era bem assim, rs.

Não consegui realizar o modo de edição dos cards e nem realizar a inclusão de novos cards pela dashboard, embora o visual esteja finalizado.

E, com os cards inseridos forçadamente pelo insomnia, as movimentações dos mesmos são todas de forma local, sem persistir na API.

Bom, deixo aqui meu código e fico á disposição para quaisquer dúvidas e/ou contatos.

Made by Bruno Alarcão 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/bruno-alarc%C3%A3o-271253103/)

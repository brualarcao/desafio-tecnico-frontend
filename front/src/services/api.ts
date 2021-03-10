interface Task {
  id: number;
  titulo: string;
  conteudo: string;
  lista: string;
}

export default function loadList() {
  return [
    {
      id: 1,
      titulo: 'Teste 1',
      conteudo: 'Teste 1',
      lista: 'ToDo',
    },
    {
      id: 2,
      titulo: 'Teste 2',
      conteudo: 'Teste 2',
      lista: 'Doing',
    },
    {
      id: 3,
      titulo: 'Teste 3',
      conteudo: 'Teste 3',
      lista: 'Done',
    },
    {
      id: 4,
      titulo: 'Teste 4',
      conteudo: 'Teste 4',
      lista: 'Doing',
    },
  ];
}

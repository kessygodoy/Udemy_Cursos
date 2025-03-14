import { use, useEffect, useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState(() => {
    const tarefasStorage = localStorage.getItem('@tarefa');
    if (tarefasStorage) {
      return JSON.parse(tarefasStorage)
    } else {
      return [
        'Pagar a conta de luz',
        'Estudar React',
        'Estudar NodeJS',
        'Estudar PHP',
        'Estudar C#',
        'Estudar Java',
      ];
    }
  });

  // Salvar tarefas no localStorage sempre que a lista mudar
  useEffect(() => {

    if (tarefas)
      localStorage.setItem('@tarefa', JSON.stringify(tarefas));
    // alert("Tarefas salvas com sucesso!");
  }, [tarefas]);

  function handleRegister(e) {
    e.preventDefault();
    setTarefas([input, ...tarefas])
    setInput("");
  }

  return (
    <div className="App">
      <h1>Tarefas</h1>
      <form onSubmit={handleRegister}>
        <label htmlFor="nome">Nome:</label><br />
        <input type="text" value={input} onChange={ev => setInput(ev.target.value)} placeholder="Digite uma tarefa" id="nome" /> <br />

        <button type="submit">Adicionar</button>
      </form>
      <br /><br />

      <div>
        <ul>
          {
            tarefas.map((tarefa, index) => (
              <li key={index}>
                <p>{tarefa}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}


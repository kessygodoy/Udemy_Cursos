import { use, useState } from "react";
import Nome from "./components/Nome";

export default function App() {
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React',
    'Estudar NodeJS',
    'Estudar PHP',
    'Estudar C#',
    'Estudar Java',
  ]);

  function handleRegister(e){
    e.preventDefault();
    setTarefas([input, ...tarefas])
  }

  return (
    <div className="App">
      <h1>Tarefas</h1>
     <form onSubmit={handleRegister}>
        <label htmlFor="nome">Nome:</label><br />
        <input type="text" value={input} onChange={ev => setInput(ev.target.value)} placeholder="Digite uma tarefa" id="nome"/> <br />

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


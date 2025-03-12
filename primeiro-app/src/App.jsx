import { useState } from "react";
import Nome from "./components/Nome";

export default function App() {
  const [nome, setNome] = useState("NoName");

  function handleChangeName (name){
    setNome(name);
  }

  return (
    <div className="App">
      <h2>Hello World!</h2>
      <Nome aluno={nome} idade="29" />  
      <button onClick={() => handleChangeName("Kessy")}>Mudar nome</button>
    </div>
  );
}


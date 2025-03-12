import { useState } from "react";
import Nome from "./components/Nome";

export default function App() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");

  const [user, setUser] =  useState({
    nome: "",
    idade: "",
    email: "",
  });

  function handleRegister(e){
    e.preventDefault();

    setUser({
      nome: nome,
      idade: idade,
      email: email,
    })
  }

  return (
    <div className="App">
      <h1>Cadastrando usuário</h1>
     <form onSubmit={handleRegister}>
        <label htmlFor="nome">Nome:</label><br />
        <input type="text" value={nome} onChange={ev => setNome(ev.target.value)} placeholder="Digite seu nome" id="nome"/> <br />
        <label htmlFor="email">Email:</label><br />
        <input type="text" value={email} onChange={ev => setEmail(ev.target.value)} placeholder="Digite seu email" id="email"/><br />
        <label htmlFor="idade">Idade:</label><br />
        <input type="text" value={idade} onChange={ev => setIdade(ev.target.value)} placeholder="Digite seu idade" id="idade"/><br />
        
        <button type="submit">Registrar</button>
     </form>
     <br /><br /> 

     <div>
      <span>Bem vindo: {user.nome}</span><br />
      <span>Idade: {user.idade}</span><br />
      <span>Email: {user.email}</span><br />
     </div>
    </div>
  );
}


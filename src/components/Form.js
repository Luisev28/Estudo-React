import { useState } from "react"

function Form(){

    function cadastarUsuario(e){
        e.preventDefault()
        console.log(name,password);
        console.log("Cadastrou o usuário")
    }

    const [name,setName] =useState()
    const [password,setPassword] =useState()


    return (
      <div>
        <h1>Meu Cadastro</h1>
        <form onSubmit={cadastarUsuario}>
          <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" placeholder="Digite o seu nome" 
            onChange={(e) => setName(e.target.value)} 
            />
          </div>
          <div>
            <label htmlFor="password">senha:</label>
            <input
              type="password"
              id="password"
              placeholder="Digite a sua senha"
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <div>
            <input type="submit" value="Cadastrar" />
          </div>
        </form>
      </div>
    );
}

export default Form
import React, { useState } from 'react';
import './App.css';
import Axios from "axios";

function App() {
  const [values, setValues] = useState();

  //função de evento onChande dos inputs
  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  //função de evento do click do botão Cadastrar
  const handleClickButton = () => {
    console.log(values);

    //endpoint, objeto que vamos enviar (payload)
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      cost: values.cost,
      category: values.category
    }).then((response) => {
      console.log(response);
    })
  };

  return (
    <div className="appContainer">
      <div className='registerContainer'>
        <h1 className='registerTitle'>Scrim Shop</h1>
        <input type="text" name="name" placeholder="Nome" className="registerInput" onChange={handleChangeValues}></input>
        <input type="text" name="cost" placeholder="Preço" className="registerInput" onChange={handleChangeValues}></input>
        <input type="text" name="category" placeholder="Categoria" className="registerInput" onChange={handleChangeValues}></input>

        <button className='registerButton' onClick={handleClickButton} >Cadastrar</button>
      </div>
    </div>
  );
}

export default App;

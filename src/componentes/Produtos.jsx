import {useState} from 'react'



function Produtos() {
  
    const [count, setCount]= useState(0);
    const [lista, setLista]= useState([]);
    const aumentar =()=> setCount(count+1);
    const diminuir =()=> setCount(count-1);
    const adicionarLista =()=> setLista([...lista, Math.random(10).toFixed(2)])

  return (
    <>
        <fieldset>
            <legend>useState</legend>
            <p>Contador:{count}</p><br/>
            <button onClick={aumentar} style={{padding:'10px'}}>Aumentar</button>
            <button onClick={diminuir} style={{padding:'10px', }}>diminuir</button>
        </fieldset>
        <fieldset>
            <legend>
                Exemplo2
            </legend>
            <ul>
                {lista.map((n,i)=><li key= {i}>{n}</li>)}
            </ul>
            <button onClick={adicionarLista}>Lista</button>
        </fieldset>
    </>
  )
}

export default Produtos

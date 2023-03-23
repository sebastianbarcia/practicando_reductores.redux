//Forma basica de entender useReducer
//Obviamente no recomendado para este ejercicio de contador, es solo para entenderlo.

import {useReducer} from 'react'

const initialState = { contador:0};

function reducer(state, action){
  switch (action.type) {
    case 'INCREMENT':
        return {contador : state.contador + 1}
    case 'DECREMENT':
        return {contador : state.contador - 1}
    default:
    return state 
  }
}

const Contador = () => {
 
  const [state , dispatch] = useReducer(reducer , initialState);

  const sumar = () => dispatch({type : "INCREMENT"})
  const restar = () => dispatch({type:"DECREMENT"})

  return (
    <div>
      <h2>Contador</h2>
    <nav>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
    </nav>
    <h3>{state.contador}</h3>
    </div>
  )
}

export default Contador
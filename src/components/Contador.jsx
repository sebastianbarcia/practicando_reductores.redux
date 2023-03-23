//Forma basica de entender useReducer
//Obviamente no recomendado para este ejercicio de contador, es solo para entenderlo.
//agregando 3er parametro init (es opcional y no se suele utilizar mucho)
//Archivos en carpetas actions y reducer

import { contadorInit , contadorInitialState , contadorReducer } from '../reducers/contadorReducer';
import { TYPES } from '../actions/contadorActions';
import {useReducer} from 'react'

const Contador = () => {
 
  const [state , dispatch] = useReducer(contadorReducer , contadorInitialState , contadorInit);

  const sumar = () => dispatch({type: TYPES.INCREMENT})
  const sumar5 = () => dispatch({type: TYPES.INCREMENT_5 , payload:5})
  const restar = () => dispatch({type:TYPES.DECREMENT})
  const restar5 = () => dispatch({type:TYPES.DECREMENT_5 , payload:5})
  const reset = () => dispatch({type: TYPES.RESET})

  return (
    <div>
      <h2>Contador Mejorado Reducer</h2>
    <nav>
      <button onClick={sumar5}>+5</button>
      <button onClick={sumar}>+</button>
      <button onClick={reset}>0</button>
      <button onClick={restar}>-</button>
      <button onClick={restar5}>-5</button>
    </nav>
    <h3>{state.contador}</h3>
    </div>
  )
}

export default Contador
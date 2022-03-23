import React, {useState}  from 'react';
import { render } from 'react-dom';
import { createRef} from 'react/cjs/react.production.min'

export default function Form({newGrid}){

  const refGridTwo = createRef()
  const refGridThree = createRef()
  const [gridForm, setGridForm] = useState({grid: ''})
  const [setNewGrid, getDataWithForm] = newGrid

  function initGame(){
    setNewGrid()
    getDataWithForm(gridForm)
  }
  

  function fGridTwo(){
    setGridForm({gridForm: refGridTwo.current.value})
  }

  function fgridThree(){
    setGridForm({gridForm: refGridThree.current.value})
  }

  return (
    <div className='form'>
        <input ref={refGridTwo} onChange={fGridTwo} type='radio' name='grid' value='2'></input>
        <label>Grid 2x2</label>
        <input ref={refGridThree} onChange={fgridThree} type='radio' name='grid' value='3'></input>
        <label>Grid 3x3</label>
        <button onClick={initGame}>Start</button>
    </div>
  );

}
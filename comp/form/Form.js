import React, {useState, createRef, useEffect}  from 'react';


export default function Form({newGrid}){

  const refGridTwo = createRef()
  const refGridThree = createRef()
  const [gridForm, setGridForm] = useState({idGrid: ''})
  const [showGrid, getDataWithForm] = newGrid


  function initGame(){
    showGrid()
    getDataWithForm(gridForm)
  }

  function fGridTwo(){
    setGridForm({...gridForm, idGrid: refGridTwo.current.value})
  }

  function fgridThree(){
    setGridForm({...gridForm, idGrid :refGridThree.current.value})
  }

  return (
    <div className='form'>
        <input ref={refGridTwo} onChange={fGridTwo} type='radio' name='grid' value='two'></input>
        <label>Grid 2x2</label>
        <input ref={refGridThree} onChange={fgridThree} type='radio' name='grid' value='three'></input>
        <label>Grid 3x3</label>
        <button onClick={initGame}>Start</button>
    </div>
  );

}
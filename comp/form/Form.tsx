import React, {useState, createRef}  from 'react';


interface PropFrom{
  showGrid() : void
  getDataWithForm(form : string) : void
}

export default function Form({newGrid} : {newGrid : any}){

  const refGridTwo = createRef<HTMLInputElement>()
  const refGridThree = createRef<HTMLInputElement>()
  const [gridForm, setGridForm] = useState({idGrid: ''})
  const [showGrid, getDataWithForm] = newGrid


  function initGame(){
    showGrid()
    getDataWithForm(gridForm)
  }

  function fGridTwo(){
    const inputRadioTwo = refGridTwo.current
    if(inputRadioTwo){
      console.log(inputRadioTwo.value)
      setGridForm({...gridForm, idGrid: inputRadioTwo.value})
    }
    
  }

  function fgridThree(){
    const inputRadioThree = refGridThree.current
    if(inputRadioThree){
      console.log(inputRadioThree.value)
      setGridForm({...gridForm, idGrid : inputRadioThree.value})
    }
    
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
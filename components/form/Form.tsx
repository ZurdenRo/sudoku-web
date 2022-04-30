import React, {useState, createRef}  from 'react';


interface PropFrom{
  newGrid: [() => void, (dataForm: string) => void ]
}

interface PropGrid{
  IDGrid : string
}

export default function Form (functionParent : PropFrom){

  const refGridTwo = createRef<HTMLInputElement>()
  const refGridThree = createRef<HTMLInputElement>()
  const arrFunc : [ () => void, (dataForm: string) => void] = functionParent.newGrid
  const [gridForm, setGridForm] = useState<PropGrid | undefined>()


  const initGame = () => {
    const [showGrid, getDataWithForm] = arrFunc
    if (gridForm != undefined){
      showGrid()
      getDataWithForm(gridForm.IDGrid)
    }
  }

  const fGridTwo = () => {
    const inputRadioTwo = refGridTwo.current
    if(inputRadioTwo){
      console.log(inputRadioTwo.value)
      setGridForm({IDGrid: inputRadioTwo.value})
    }
    
  }

  const fgridThree = () => {
    const inputRadioThree = refGridThree.current
    if(inputRadioThree){
      console.log(inputRadioThree.value)
      setGridForm({IDGrid : inputRadioThree.value})
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
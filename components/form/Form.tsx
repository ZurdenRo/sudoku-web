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
    <div className="flex justify-center item-center">
        <input className="m-18" ref={refGridTwo} onChange={fGridTwo} type="radio" name="grid" value="two"></input>
        <label className="px-18">Grid 2x2</label>
        <input className="m-18" ref={refGridThree} onChange={fgridThree} type="radio" name="grid" value="three"></input>
        <label className="px-18">Grid 3x3</label>
        <button className="px-18" onClick={initGame}>Start</button>
    </div>
  );
  
}


export default function Cell({updateMatrix, position, cell} : {updateMatrix: any, position : any, cell: any} ) {

    var matrixCell

    function checkCells(target, position){
        console.log(target)
        const {x,y} = position
        updateMatrix(target, x, y)
    }

    if(cell.hidden){
        return <input type='number' onChange={(e) => checkCells(e.target.value, position)}></input>
    }else{
        return <label>{cell.number}</label>
    }
  
}
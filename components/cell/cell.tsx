import {Cell as Cells } from '../grid/Grid'

export default function Cell({cell} : {cell: Cells | undefined}) {


/*     function checkCells(target, position){
        console.log(target)
        const {x,y} = position
        updateMatrix(target, x, y)
    } */

    if(cell?.hidden){
        return <input type='number'></input>
    }else{
        return <label>{cell?.num}</label>
    }
  
}
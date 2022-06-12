import { ChangeEvent, useState } from 'react'
import {Cell as Cells } from '../grid/Grid'

export default function Cell({cell}: {cell: Cells}) {


    const checkCell = (numberInput: string) => {
        if(numberInput){
            cell.num = Number(numberInput);
        }else{
            cell.num = undefined
        }
    }

    if(cell.hidden){
        return <input type='number' onChange={e => checkCell(e.target.value)}></input>
    }else{
        return <label>{cell.num}</label>
    }
  
}


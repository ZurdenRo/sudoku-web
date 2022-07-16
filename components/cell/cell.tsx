import { ChangeEvent, useState } from 'react'
import {Cell as Cells} from '../grid/Grid'
import styles from './Cell.module.css'

// i need install package classNames() to manage 3 options: undefined, true or false

export default function Cell({cell, updateMatrix}: {cell: Cells, updateMatrix: (cell: Cells) => void}) {

    const checkCell = (numberInput: string) => {
       
        if(numberInput){
            cell.num = Number(numberInput);
            console.log(cell);
            updateMatrix(cell);
        }else{
            cell.num = undefined
            updateMatrix(cell);
            
        }
    }

    if(cell.hidden){
       
        return <input className={cell.isOk ? styles.input : styles.inputError} onChange={e => checkCell(e.target.value)}></input>
    }else{
        return <label>{cell.num}</label>
    }
  
}

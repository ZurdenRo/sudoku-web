import { ChangeEvent, useState } from 'react'
import {Cell as Cells} from '../grid/Grid'
import styles from './Cell.module.css'
import classNames from 'classnames'
import { type } from 'os'
// i need install package classNames() to manage 3 options: undefined, true or false

export default function Cell({cell, updateMatrix}: {cell: Cells, updateMatrix: (cell: Cells) => void}) {

    const checkCell = (numberInput: string) => {
       
        if(numberInput){
            cell.num = Number(numberInput);
            console.log(cell);
            updateMatrix(cell);
        }else{
            cell.num = null
            updateMatrix(cell);
        }
    }

    if(cell.hidden){
        console.log(cell.isOk == null)
        var inputStyle = classNames({ [`${styles.input}`]: cell.isOk == null,
                                      [`${styles.input}`]: cell.isOk, 
                                      [`${styles.inputError}`] : cell.isOk == false});
        return <input className={inputStyle} onChange={e => checkCell(e.target.value)}></input>
    }else{
        return <label>{cell.num}</label>
    }

}

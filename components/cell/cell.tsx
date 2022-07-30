import { ChangeEvent, useState } from 'react'
import {Cell as Cells} from '../grid/Grid'
import styles from './Cell.module.css'
import classNames from 'classnames'

export default function Cell({blockInput, cell, updateMatrix}: {blockInput: boolean, cell: Cells, updateMatrix: (cell: Cells) => void}) {

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
        console.log(blockInput)
        var inputStyle = classNames({ [`${styles.input}`]: cell.isOk == null,
                                      [`${styles.input}`]: cell.isOk, 
                                      [`${styles.inputError}`] : cell.isOk == false});
        return <input disabled={blockInput} className={inputStyle} onChange={e => checkCell(e.target.value)}></input>
    }else{
        return <label>{cell.num}</label>
    }

}

import { ChangeEvent, useState } from 'react'
import {Cell as Cells } from '../grid/Grid'
import styles from './Cell.module.css'

export default function Cell({cell}: {cell: Cells}) {

    const [isOk, setOk] = useState<{isOk: boolean}>();

    const checkCell = (numberInput: string) => {
        
        if(numberInput){
            setOk({isOk: !isOk})
            console.log(numberInput)
            cell.num = Number(numberInput);
        }else{
            cell.num = undefined
        }
    }

    if(cell.hidden){
        if(cell.isOk === undefined){
            return (<input className={false ? styles.input: styles.inputSucces}  type='number' onChange={e => checkCell(e.target.value)}></input>)
        }else{
            if(cell.isOk){
                return (<input className={styles.inputSucces}  type='number' onChange={e => checkCell(e.target.value)}></input>)
            }else{
                return (<input className={styles.inputError}  type='number' onChange={e => checkCell(e.target.value)}></input>)
            }
        }
        
    }else{
        return <label>{cell.num}</label>
    }
  
}


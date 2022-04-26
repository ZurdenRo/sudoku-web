import React, {useState, useEffect} from 'react'
// import Cell from '../cell/cell.js'
import json from '../../resources/data.json'
//import {ObjCell} from '../../model/Cell.js'

function GenerateGrid({data , showForm} : {data: any, showForm: any}){

    const [table, setTable] = useState()
    const [tableToMatch, setTableToMatch] = useState()
    const [isEqual, setEqual] = useState(false)
    
    /* function getRandomArbitrary(num){
        let randomTmp = [];
        while (randomTmp.length < num) {
            let obj = {
                posX: Math.floor(Math.random() * num),
                posY: Math.floor(Math.random() * num)
            };

            if (randomTmp.length === 0) {
                randomTmp.push(obj);
            }

            if (randomTmp.every((x) => x.posX !== obj.posX || x.posY !== obj.posY)) {
                randomTmp.push(obj);
            }
        }
        let objTwo = {
            positionToHidden: randomTmp
        };

        return objTwo;
    } */
    
    useEffect( () => {
        console.log('effect in generateGrid')
        let num = data.grid.subGrid.length
        //var matF = []
        var matrixFinal = new Array(num*num) 
        var matrixToMatch = new Array(num*num)
        for (let element = 0; element < matrixFinal.length; element++) {
            matrixFinal[element] = new Array(num*num)
            matrixToMatch[element] =  new Array(num*num)
        }
        
        /* data.grid.subGrid.forEach((element, i) => {
            var matrixTmp = []
            element.map((value)=>{
                let arrRandomPosition = getRandomArbitrary(num)
                let matrix = []
                for (let row = 0; row < num; row++) {
                    let arrInMatrix = []
                    for (let column = 0; column < num; column++) {
                        let posX = value.cellsMatrix[row][column].row
                        let posY = value.cellsMatrix[row][column].column
                        let number = value.cellsMatrix[row][column].number
                        let posToHidden = arrRandomPosition.positionToHidden.find( posHid => {
                            return posHid.posX === posX && posHid.posY === posY;
                        });

                        if(posToHidden){
                            arrInMatrix.push(new ObjCell(number, posX, posY, true))
                        }else{
                            arrInMatrix.push(new ObjCell(number, posX, posY, false))
                        }
                    }
                    matrix.push(arrInMatrix)
                }
                matrixTmp.push({gridRow : i, cellsMatrix: matrix})
            });
            matF.push(matrixTmp)
        }); */
        let positionRow = 0
        let positionCol = 0
       /*  matF.map(inside => {
            for (let row = 0; row < num; row++) {
                inside.map( (valueGrid) => {
                    for (let column = 0; column < num; column++) {
                        let cellTmp = valueGrid.cellsMatrix[row][column]
                        matrixFinal[positionRow][positionCol] = cellTmp
                        if(!valueGrid.cellsMatrix[row][column].hidden){
                            matrixToMatch[positionRow][positionCol] = cellTmp
                        } 
                        
                        positionCol++;
                    }
                });
                positionRow++;
                positionCol = 0
            }
        }); */
        /* console.log(matrixFinal)
        console.log(matrixToMatch)
        setTable(matrixFinal)
        setTableToMatch(matrixToMatch) */
    },[data])

    function goBackToForm(){
        showForm()
    }

    /* function updateMatrix(target, x, y){  
        if(target){
            tableToMatch[x][y] = new ObjCell(parseInt(target), x, y, false)
        }else{
            tableToMatch[x][y] = ''
        }
        
        console.log(tableToMatch) 
    } */

    /* function checkMatrix(){
        let tmpIsEqual = true
        for (let row = 0; row < table.length; row++) {
            for (let column = 0; column < table.length; column++) {
                if(tableToMatch[row][column]){
                    if(!table[row][column].number === tableToMatch[row][column].number){
                        console.log('here')
                        tmpIsEqual = false
                    }
                }else{tmpIsEqual=false}
            }
        }
        setEqual(tmpIsEqual)
        
    } */

    if(table){
        return (
            <div className='container-table'>
                <table>
                    <thead></thead>
                    <tbody>
                        {table.map( (row, x) => {
                            return(
                                <tr key={x}>
                                    {row.map((cell, y) => {
                                        
                                        return(
                                            <td key={y}>
                                                <Cell updateMatrix={updateMatrix} position={{x,y}} cell={cell}></Cell>
                                            </td>
                                        )
                                    })}
                                </tr>   
                            ) 
                        })}
                    </tbody>
                </table>
                <button onClick={goBackToForm}>Back</button>
                <button onClick={checkMatrix}>Check</button>
                {isEqual ? <h1>yes u know bro</h1> : <h1>no</h1>}
            </div>
        )
    }else{
        return <h1>loading</h1>
    }
    
}



interface PropGrid{
    showForm: () => void
    grid: string | undefined
}

interface PropGame{
    table: string
}

export default function Grid({showForm, grid} : PropGrid){

    const [data, setData] = useState<PropGame>()
    const [isFetching, setFetching] = useState<Boolean>(true)

    useEffect( () => {
        getData(grid)
    },[grid])

    async function getData(query: string | undefined){
        console.log('Run Method in Effect')
        const response = await fetch ('https://zurdenro-my-app-74i6k.ondigitalocean.app/api/v1/grid/'+ query)
        const data = await response.json()
        setData({table : data})
        setFetching(false)
    }
    

    if(isFetching) return (<h1>loading</h1>);

    return(
        <>
           {/*  <GenerateGrid data={data} showForm={showForm}/> */}
        </>
    );
}
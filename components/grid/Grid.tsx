import React, {useState, useEffect} from 'react'
import json from '../../resources/data.json'
import Cell from '../cell'

export interface Cell {
    num : number | undefined,
    hidden: boolean,
    position?: Position
}

interface Position {
    posX: number,
    posY: number
}

interface PositionGrid{
    cellsMatrix: Cell[][]
    indicator: number
}

interface Table{
    cells: Cell[][]
}


function GenerateGrid({data, showForm} : {data: MessageFetch, showForm: () => void}){

    const [table, setTable] = useState<Table>()
    const [tableToMatch, setTableToMatch] = useState<Table>()
    const [isEqual, setEqual] = useState<Boolean>(false)
    
    const getRandomArbitrary = (num: number): Position[] => {
        let randomTmp : Position [] = [];
        while(randomTmp.length < num){
            let posRandom : Position = {
                posX: Math.floor(Math.random() * num),
                posY: Math.floor(Math.random() * num)
            }
            if (randomTmp.length === 0) {
                randomTmp.push(posRandom);
            }
    
            if (randomTmp.every((x) => x.posX !== posRandom.posX || x.posY !== posRandom.posY)) {
                randomTmp.push(posRandom);
            }
        }
    
        return randomTmp;
    }

    useEffect( () => {
        var finalArr = new Array()
        var numLength : number = data.grid.subGrid.length

        data.grid.subGrid.forEach((element: any, i: number) => {
            let arrPosGrid : PositionGrid[] = []
            element.forEach((matrix: any) => {
                let arrPosToHidden : Position [] = getRandomArbitrary(numLength)
                let matrixFinal : Cell [][] = []
                for (let row = 0; row < matrix.cellsMatrix.length; row++) {
                    matrixFinal[row] = []
                    for (let column = 0; column < matrix.cellsMatrix.length; column++) {
                        let numb: number = matrix.cellsMatrix[row][column].number;
                        let pos: Position = {posX:matrix.cellsMatrix[row][column].row, posY: matrix.cellsMatrix[row][column].column};
                        let posToHidden : Position[] = arrPosToHidden.filter( posHid => {
                            return posHid.posX === pos.posX && posHid.posY === pos.posY;
                        });
                        if(posToHidden.length !== 0){
                            var cellTmp : Cell = {num: numb, hidden: true}
                        }else{
                            var cellTmp : Cell = {num: numb, hidden: false}
                        }
                        matrixFinal[row][column] = cellTmp
                    }
                }
                let posGrid : PositionGrid = {cellsMatrix: matrixFinal, indicator: i}
                arrPosGrid.push(posGrid)
            });
            finalArr.push(arrPosGrid)
        });

        var positionRow : number = 0
        var positionCol : number = 0
        var matrixFinal : Cell [][] = []
        var matrixToMatch : Cell [][] = []
        finalArr.map( arrElem => {
            for (let row = 0; row < numLength; row++) {
                matrixFinal[positionRow] = []
                matrixToMatch[positionRow] = []
                arrElem.map( (valuePosGrid: PositionGrid) => {
                for (let column = 0; column < valuePosGrid.cellsMatrix.length; column++) {
                    let cellTmp : Cell = valuePosGrid.cellsMatrix[row][column]
                    let pos: Position = {posX: positionRow, posY: positionCol}
                    cellTmp.position = pos
                    matrixFinal[positionRow][positionCol] = cellTmp
                    if(valuePosGrid.cellsMatrix[row][column].hidden){
                        cellTmp.num = undefined
                        cellTmp.hidden = valuePosGrid.cellsMatrix[row][column].hidden
                        matrixToMatch[positionRow][positionCol] =  cellTmp
                    }else{
                        matrixToMatch[positionRow][positionCol] = cellTmp
                    }
                    positionCol++;
                }});
                positionRow++;
                positionCol = 0;
            }
        });
        setTable({cells: matrixFinal})
        setTableToMatch({cells: matrixToMatch})
    },[data]);

    const goBackToForm = () => {
        showForm()
    }

    const updateMatrix = (cell : Cell) => {
        console.log(cell)
        
    }

    const checkMatrix = () => {
        var a : boolean = checkEqualMatrix();
        console.log(a)
        console.log(tableToMatch)
    }

    const checkEqualMatrix = () => {
        if(table && tableToMatch){
            for (let row = 0; row < table.cells.length; row++) {
                for (let column = 0; column < table.cells.length; column++) {           
                    
                    if(!table.cells[row][column].num){
                        console.log('!table.cells[row][column].num')
                        return false;
                    }
                    if(table.cells[row][column].num !== tableToMatch.cells[row][column].num){
                        console.log('table.cells[row][column].num !== tableToMatch.cells[row][column].num')
                        return false;
                    }

                }
            }
            return true;
        }else{
            return false;
        }
    }

    if(table){     
        return(
            <div>
                <table>
                    <tbody>
                        {table.cells.map( row => {
                            return (
                                <tr>
                                    {row.map( (column: Cell) => {
                                        return (
                                            <td>
                                                <Cell cell={column} checkValue={updateMatrix}></Cell>
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
              
                </table>
                <button onClick={goBackToForm}>Back</button>
                <button onClick={checkMatrix}>check</button>
            </div>
        )
    }else{
        return <h1>loading</h1>
    } 
}



interface PropGrid{
    showForm: () => void
    grid: string 
}

interface MessageFetch{
    grid: any
}


export default function Grid({showForm, grid} : PropGrid){

    const [data, setData] = useState<MessageFetch>()
    const [isFetching, setFetching] = useState<Boolean>(true)

    useEffect(() => {
        console.log('Run Method in Effect')
        getData(grid)
    },[grid])

    function getData(query: string){
        //const response = await fetch ('https://zurdenro-my-app-74i6k.ondigitalocean.app/api/v1/grid/'+ query)
        //const data = await response.json()
        setData({grid : json})
        setFetching(false)
    }

    if(isFetching) return <h1>loading</h1>;

    return(
        <>
           {<GenerateGrid data={data?.grid} showForm={showForm}/>}
        </>
    );
}
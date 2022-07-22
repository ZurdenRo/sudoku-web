import React, {useState, useEffect} from 'react'
import json from '../../resources/data.json'
import Cell from '../cell'

export interface Cell {
    num: number | null,
    hidden: boolean,
    isOk?: boolean | null,
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
    const [isFinishGame, setFinishGame] = useState<boolean>(false)
    
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
        console.log(data)
        var numLength : number = data.grid.subGrid.length

        data.grid.subGrid.forEach((element: any, i: number) => {
            let arrPosGrid : PositionGrid[] = []
            element.forEach((matrix: any) => {
                let arrPosToHidden = getRandomArbitrary(numLength)
                let matrixFinal : Cell [][] = []
                for (let row = 0; row < matrix.cellsMatrix.length; row++) {
                    matrixFinal[row] = []
                    for (let column = 0; column < matrix.cellsMatrix.length; column++) {
                        let numb: number = matrix.cellsMatrix[row][column].number;
                        let pos: Position = {posX:matrix.cellsMatrix[row][column].row, posY: matrix.cellsMatrix[row][column].column};
                        let posToHidden = arrPosToHidden.filter( posHid => {
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
                        if(valuePosGrid.cellsMatrix[row][column].num){
                            let num = valuePosGrid.cellsMatrix[row][column].num
                            let hidden: boolean = valuePosGrid.cellsMatrix[row][column].hidden               
                            let pos: Position = {posX: positionRow, posY: positionCol}
                            let cell: Cell = {num: num, hidden: hidden, position: pos}
                            matrixFinal[positionRow][positionCol] = cell
                            let cellTmp: Cell = valuePosGrid.cellsMatrix[row][column]
                            if(cellTmp.hidden){
                                cellTmp.num = null
                                cellTmp.position = pos;
                                cellTmp.isOk = null
                                matrixToMatch[positionRow][positionCol] =  cellTmp
                            }else{
                                cellTmp.position = pos;
                                matrixToMatch[positionRow][positionCol] = cellTmp
                            }
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

    const updateMatrix = (cell: Cell) => {
        console.log('call f: update', cell)
        if(tableToMatch){
           if(cell.position){
            var copyTable: Cell [][] = Array.from(tableToMatch.cells);
            copyTable[cell.position.posX][cell.position.posY].num = cell.num;
            setTableToMatch({cells: copyTable})
           }
        }
    }

    const checkMatrixIfIsEqual = () => {
        var isEqual : boolean = true

        if(table && tableToMatch){
            var copyTable: Cell [][] = Array.from(tableToMatch.cells)
            
            for (let row = 0; row < table.cells.length; row++) {
                for (let column = 0; column < table.cells.length; column++) {        
                    
                    if(table.cells[row][column].num !== copyTable[row][column].num){
                        console.log('table.cells[row][column].num !== tableToMatch.cells[row][column].num');
                        copyTable[row][column].isOk = false;
                        isEqual = false;
                    }else{
                        copyTable[row][column].isOk = true;
                    }
                    
                }
            }
            setTableToMatch({cells: copyTable});

            if(isEqual){
                setFinishGame(isFinish => !isFinish)
            }
        }
    }


    if(tableToMatch){     
        return(
            <div>
                <table>
                    <tbody>
                        {tableToMatch.cells.map( row => {
                            return (
                                <tr>
                                    {row.map( (column: Cell) => {
                                        return (
                                            <td>
                                                <Cell blockInput={isFinishGame} cell={column} updateMatrix={updateMatrix}></Cell>
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
              
                </table>
                <button onClick={goBackToForm}>Back</button>
                <button disabled={isFinishGame} onClick={checkMatrixIfIsEqual}>check</button>
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
        fetch('https://zurdenro-my-app-74i6k.ondigitalocean.app/api/v1/grid/'+ query).then(responseOk => {return responseOk.json()})
        .then(data => { 
            //console.log(data)
            setData({grid : data})
            setFetching(false)
        })
    }

    if(isFetching) return <h1>loading</h1>;

    return(
        <>
           {<GenerateGrid data={data?.grid} showForm={showForm}/>}
        </>
    );
}
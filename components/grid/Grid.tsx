import React, {useState, useEffect} from 'react'
import json from '../../resources/data.json'

interface Cell {
    num : number,
    hidden: boolean,
    position: Position
}

interface Position {
    posX: number,
    posY: number
}

interface PositionGrid{
    cellsMatrix: Cell[][]
    idGrid: number
}

interface Table{

}

interface TableFrontUser{

}

function GenerateGrid({data, showForm}: {data: PropGame, showForm: () => void}){

    const [table, setTable] = useState<Table>()
    const [tableToMatch, setTableToMatch] = useState<TableFrontUser>()
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
                            var cellTmp : Cell = {num: numb, hidden: true, position: pos}
                        }else{
                            var cellTmp : Cell = {num: numb, hidden: false, position: pos}
                        }
                        matrixFinal[row][column] = cellTmp
                    }
                }
                let posGrid : PositionGrid = {cellsMatrix: matrixFinal, idGrid: i}
                arrPosGrid.push(posGrid)
            });
            finalArr.push(arrPosGrid)
        });

        var positionRow = 0
        var positionCol = 0
        var matrixFinal : Cell [][] = []
        var matrixToMatch : Cell [][] | string[][] = []
        finalArr.map( arrElem => {
            for (let row = 0; row < numLength; row++) {
                matrixFinal[positionRow] = []
                matrixToMatch[positionRow] = []
                arrElem.map( (valuePosGrid: PositionGrid) => {
                for (let column = 0; column < valuePosGrid.cellsMatrix.length; column++) {
                    let cellTmp : Cell = valuePosGrid.cellsMatrix[row][column]
                    matrixFinal[positionRow][positionCol] = cellTmp
                    if(valuePosGrid.cellsMatrix[row][column].hidden){
                        matrixToMatch[positionRow][positionCol] =  "empty"
                    }else{
                        matrixToMatch[positionRow][positionCol] = cellTmp
                    }
                    positionCol++;
                }
                });
                positionRow++;
                positionCol = 0;
            }
        });
        console.log(matrixFinal)
        console.log(matrixToMatch)
    },[data])

    function goBackToForm(){
        showForm()
    }

    if(table){     
        return(
            <div>

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

interface PropGame{
    grid: any
}


export default function Grid({showForm, grid} : PropGrid){

    const [data, setData] = useState<PropGame>()
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
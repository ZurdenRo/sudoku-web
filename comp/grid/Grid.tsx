import React, {useState, useEffect} from 'react'
import json from '../../resources/data.json'


function GenerateGrid({data, showForm}: {data: PropGame, showForm: () => void}){

    const [table, setTable] = useState()
    const [tableToMatch, setTableToMatch] = useState()
    const [isEqual, setEqual] = useState(false)
    
    
    useEffect( () => {
       
    },[data])

    function goBackToForm(){
        showForm()
    }

    console.log(data)
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
    table: any
}


export default function Grid({showForm, grid} : PropGrid){

    const [data, setData] = useState<PropGame>()
    const [isFetching, setFetching] = useState<Boolean>(true)

    useEffect(() => {
        console.log('Run Method in Effect')
        getData(grid)
    },[grid])

    async function getData(query: string){
        //const response = await fetch ('https://zurdenro-my-app-74i6k.ondigitalocean.app/api/v1/grid/'+ query)
        //const data = await response.json()
        setData({table : json})
        setFetching(false)
    }

    if(isFetching) return <h1>loading</h1>;

    return(
        <>
           {<GenerateGrid data={data?.table} showForm={showForm}/>}
        </>
    );
}
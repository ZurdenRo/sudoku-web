import Form from '../comp/form/Form.js'
import Head from 'next/head'
import React, {useState} from 'react'
import Grid from '../comp/grid/Grid.js'



export default function Home(){

    const [hiddenForm, setHiddenForm] = useState(true)
    const [grid, setGrid] = useState({grid: ''})
    

    function setNewGrid(){
        setHiddenForm(false)
    }

    function showForm(){
        setHiddenForm(true)
    }

    function getDataWithForm(value){
        setGrid({grid: value.gridForm})
        
    }

    return(
        <>
            <Head>
                <title>My page</title>
                <meta name='keyboards' content='mypage'/>
            </Head>
            <main className='mainApp'>
                { hiddenForm ?  <Form newGrid={[setNewGrid, getDataWithForm]}/> : <Grid showForm={showForm} grid={grid} />}
            </main>
        </>
    );
}
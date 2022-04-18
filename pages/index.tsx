import Form from '../comp/form/Form'
import Grid from '../comp/grid/Grid'
import Head from 'next/head'
import React, {useState} from 'react'


interface PropHome{
    IDGrid : string
}

export default function Home(){

    const [hiddenForm, setHiddenForm] = useState(true)
    const [gridHome, setGrid] = useState(null)
    

    function showGrid(){
        setHiddenForm(false)
    }

    function showForm(){
        setHiddenForm(true)
    }

    function getDataWithForm(dataForm){
        setGrid({dataForm})
    }

    return(
        <>  
            <Head>
                <title>My page</title>
                <meta name='keyboards' content='mypage'/>
            </Head>
            <main className='mainApp'>
                { hiddenForm ?  <Form newGrid={[showGrid, getDataWithForm]}/> : <Grid showForm={showForm} grid={gridHome.dataForm} />}
            </main>
        </>
    );
}
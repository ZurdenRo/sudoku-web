import Form from '../components/form/Form'
import Grid from '../components/grid/Grid'
import Head from 'next/head'
import React, {useState} from 'react'


interface PropHome{
    idGrid : string 
}

export default function Home(){

    const [hiddenForm, setHiddenForm] = useState<boolean>(true)
    const [gridHome, setGrid] = useState<PropHome>({idGrid: ""})
    

    const showGrid = () => {
        setHiddenForm(false)
    }

    const showForm = () => {
        setHiddenForm(true)
    }

    const getDataWithForm = (dataForm: string)=> {
        setGrid({idGrid: dataForm})
    }

    return(
        <>  
            <Head>
                <title>My page</title>
                <meta name='keyboards' content='mypage'/>
            </Head>
            <main className='mainApp'>
                {hiddenForm ? <Form newGrid={[showGrid, getDataWithForm]}/> : <Grid showForm={showForm} grid={gridHome.idGrid} />}
            </main>
        </>
    );
}
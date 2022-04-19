import Form from '../comp/form/Form'
import Grid from '../comp/grid/Grid'
import Head from 'next/head'
import React, {useState} from 'react'


interface PropHome{
    IDGrid : string
}

export default function Home(){

    const [hiddenForm, setHiddenForm] = useState<boolean>(true)
    const [gridHome, setGrid] = useState<PropHome | undefined>(undefined)
    

    const showGrid = () => {
        setHiddenForm(false)
    }

    const showForm = () => {
        setHiddenForm(true)
    }

    const getDataWithForm = (dataForm: PropHome)=> {
        setGrid({IDGrid: dataForm.IDGrid})
    }

    return(
        <>  
            <Head>
                <title>My page</title>
                <meta name='keyboards' content='mypage'/>
            </Head>
            <main className='mainApp'>
                { hiddenForm ?  <Form newGrid={[showForm, getDataWithForm]}/> : <Grid showForm={showForm} grid={gridHome?.IDGrid} />}
            </main>
        </>
    );
}
import Form from '../comp/form/Form.js'
import Head from 'next/head'
import React, {useState} from 'react'



export default function Home(){
   
    const [checked, isChecked] = useState(false)

    const functionCheck = (e) => {
        console.log(e.checked)
    }

    return(
        <>
            <Head>
                <title>My page</title>
                <meta name='keyboards' content='mypage'/>
            </Head>
            <main className='mainApp'>
            
                <Form/>

            </main>
        </>
    );
}
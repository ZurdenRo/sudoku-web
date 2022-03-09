import Link from 'next/link'
import styles from '../styles/Home.module.css'
import styButton from '../styles/Button.module.css'
import Image from 'next/image'
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
                <title> My page</title>
                <meta name='keyboards' content='mypage'/>
            </Head>
            <main className={styles.main}>
               
               <div>
                    <input type='checkbox' name='checked' value={checked} onChange={functionCheck}></input>
               </div>
            
            </main>
        </>
    );
}
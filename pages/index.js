import Link from 'next/link'
import styles from '../styles/Home.module.css'
import styButton from '../styles/Button.module.css'
import Image from 'next/image'
import Head from 'next/head'
import React, {useState} from 'react'



export default function Home(){
    const [obj, setGrid] = useState({grid: ''});

    const functionClick = () => {
        setGrid(obj => ({grid : obj.value}))
        console.log(obj.grid)
    }

    return(
        <>
            <Head>
                <title> My page</title>
                <meta name='keyboards' content='mypage'/>
            </Head>
            <main className={styles.main}>
               <div className='container'>  
                    <div className='select-grid'>
                        <form>
                            <input type='radio' name='grid' value='2' onClick={functionClick}></input>
                            <label>Grid 2x2</label>
                            <br/>
                            <input type='radio' name='grid' value='3' onChange={functionClick}></input>
                            <label>Grid 3x3</label>
                            <br/>
                        </form>
                        <button>
                            <p>Start</p>
                        </button>
                    </div> 
               </div>
            
            </main>
        </>
    );
}
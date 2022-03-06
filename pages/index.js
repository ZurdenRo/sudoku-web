import Link from 'next/link'
import styles from '../styles/Home.module.css'
import styButton from '../styles/Button.module.css'
import Image from 'next/image'
import Head from 'next/head'

export default function Home(){
    return(
        <>
            <Head>
                <title> My page</title>
                <meta name='keyboards' content='mypage'/>
            </Head>
            <main className={styles.main}>
                <h1>Hello</h1>
                <Image src='/mountain.jpg' width={200} height={100}></Image>
                <div>
                    <div>
                        <h1>Hola H1</h1>
                        <button className={styButton.firstButton} type='button'> is button</button>
                    </div>
                    <div>
                        <h2>Hola H2</h2>
                        <button className={styButton.firstButton} type='button'> is button</button>
                    </div>
                    <div>
                        <h3>Hola H3</h3>
                        <button className={styButton.firstButton} type='button'> is button</button>
                    </div>
                </div>
            </main>
        </>
    );
}
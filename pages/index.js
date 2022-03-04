import Head from "next/head";
import styles from "../styles/Home.module.css"
import Navbar from "../comp/Navbar"
import Footer from "../comp/Footer"


export default function Home(){
    return(
        <div>
            <Navbar />
            <h1>HomePage</h1>
            <a>My home page.</a>
            <Footer />
        </div>
    );
}
import React from 'react';
import styles from './BaseLayout.module.css';
import { Link } from "react-router-dom";
import {Header} from "../components/header";


export const BaseLayout = ({children}) => {
    return (
        <div className={styles.mainWrapper}>
            <header>
                <Link to={'/'}>header data</Link>
                <Header/>

            </header>
            <main>
                {children}
            </main>
            <footer>footer data</footer>
        </div>
    )
}
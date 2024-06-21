import React from 'react'
import styles from "../styles/Home.module.css";

import BG from '../../images/computer.png'

const Poster = () => {
    return (
        <section className={styles.home}>
            <div className={styles.title}>
                SALE 20%
            </div>
            <div className={styles.product}></div>
            <div className={styles.text}>
                <div className={styles.subtitle}>
                    top of 2024
                </div> 
                <h1 className={styles.head}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, amet.</h1>
                <button className={styles.button}>Shop now</button>
            </div>
            <div className={styles.image}>
                <img src={BG} alt="" />
            </div>
        </section>
    )
}

export default Poster

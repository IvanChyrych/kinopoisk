import React from "react"
import { Link } from "react-router-dom";

import styles from "../styles/Categories.module.css";

const Categories = ({ title, style = {}, products = [], amount }) => {

    const list = Object.values(products).filter((_, i) => i < amount);

    return (
        <section className={styles.section}>
            <h2>{title}</h2>
            <div className={styles.list} >
                {list.map(({ id, name, poster }) => (
                    <Link to={`/categories/${id}`} key={id} className={styles.item}>

                        <h3 className={styles.title}>{name}</h3>

                    </Link>


                ))}
            </div>
        </section>
    )
}

export default Categories

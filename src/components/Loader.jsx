import React from 'react';
import spinner from "../GIF/spinner.gif";
import styles from "../styles/Loader.module.css";


const Loader = () => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={spinner} alt='Loading' />
            <h1>Loading...</h1>
        </div>
    );
};

export default Loader;
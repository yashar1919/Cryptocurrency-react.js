import React from 'react';
import styles from "../styles/Coin.module.css";


const Coin = ({ name, image, symbol, currentPrice, marketCap, changePrice }) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt={name} />

            <span className={styles.name}>{name}</span>

            <span className={styles.symbol}>{symbol.toUpperCase()}</span>

            <span className={styles.currentPrice}> $ {currentPrice.toLocaleString()}</span>

            <span
                className={changePrice > 0 ? styles.greenChangePrice : styles.redChangePrice}>
                {changePrice.toFixed(2)}
            </span>

            <span className={styles.marketCap}> $ {marketCap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;
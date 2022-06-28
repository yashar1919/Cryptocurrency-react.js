import React, { useEffect, useState } from 'react';
import { getCoin } from '../services/api';
import Coin from './Coin';
import Loader from './Loader';
import styles from "../styles/Landing.module.css";

const Landing = () => {

    const [coin, setCoin] = useState([]);

    //state has k array az object haye search shode ro too khodesh gharar mide.
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            setCoin(data);
        }

        fetchAPI();

    }, []);

    // harchi user search kone ro ba setSearch mirizim tooye state search k sakhtim
    const searchHandler = (event) => {
        setSearch(event.target.value);
    }

    /* 
    includes check mikone k stringi k type kardim tooye name has ya na k on string mishe
    hamoon state searche ma. chon harchi search kone user, tooye state search gharar migire */
    const searchCoins = coin.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            <input className={styles.input} type='text' placeholder='Search...' value={search} onChange={searchHandler} />

            {
                coin.length !== 0
                    ?
                    <div className={styles.coinContainer}>
                        {
                            searchCoins.map(item => <Coin
                                key={item.id}
                                name={item.name}
                                image={item.image}
                                symbol={item.symbol}
                                currentPrice={item.current_price}
                                marketCap={item.market_cap}
                                changePrice={item.price_change_percentage_24h}
                            />)
                        }
                    </div>
                    :
                    <Loader />
            }
        </>
    );
};

export default Landing;



// ------------------------------------------ Comments ------------------------------------------

/* 
searchCoins.map(item => <Coin
    key={item.id}
    name={item.name}
    image={item.image}
    symbol={item.symbol}
    currentPrice={item.current_price}
    marketCap={item.market_cap}
    changePrice={item.price_change_percentage_24h}
/>)
                                                        
inja map zadim rooye searchCoins chon dar ebteda khali has o kolle
state ro neshoon mide, amma vaghti search anjam beshe belafasele
bar asase stringe vaared shode tooye ghesmate search, mavared ro
filter mikone o neshoon mide

*/
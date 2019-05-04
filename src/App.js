import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Header from 'components/Header/Header';
import QueryResults from 'components/QueryResults/QueryResults';
import Favourites from 'components/Favourites/Favourites';
import Loading from 'components/Loading/Loading';
import useFuseSearch from 'hooks/useFuseSearch';

const App = () => {
//state variables
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState('');
    const [favourites, setFavourites] = useState([]);
//effect hooks
    useEffect(() => {
        // Mock of API call
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);
//custom hooks
    const result = useFuseSearch(query);
//handlers
    const handleSearch = (searchVal) => {
        setQuery(searchVal);
    };

    const toggleFavourite = (id) => {
        const isFavourited = (favourites || []).findIndex((v) => v === id) !== -1;
        if (!isFavourited) {
            setFavourites([...favourites, id]);
        } else {
            setFavourites((favourites || []).filter((v) => (
                v !== id
            )));
        }
    }

    return (
        <div className={styles.appLayout}>
            {loading ?
                <Loading/> :
                <>
                    <Header title='Toronto Waste Lookup'/>
                    <QueryResults
                        favourites={favourites}
                        handleSearch={handleSearch}
                        handleFavourite={toggleFavourite}
                        result = {result}
                    />
                    <Favourites
                        favourites={favourites}
                        handleFavourite={toggleFavourite}
                    />
                </>
            }
        </div>
    );
};

export default App;

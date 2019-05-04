import React from 'react';
import PropTypes from 'prop-types';
import styles from './Favourites.module.css';

import {QueryResult} from 'components/QueryResults/QueryResults';
import {wasteData} from 'assets/wasteData';
import Error from 'components/Error/Error';

const Favourites = (props) => {
    const {favourites, handleFavourite} = props;
    return (
        <div className={styles.favouritesContainer}>
            <div className={styles.favouritesLayout}>
                <h1 className={styles.favouritesTitle}>Favourites</h1>
                {
                    favourites.length === 0 ?
                        <Error
                            header='Empty...'
                            body='Click on a star!'
                        /> :
                        <div className={styles.gridLayout}>
                            {
                                (favourites).map((v) => {
                                    const data = wasteData[v];
                                    return (
                                        <QueryResult
                                            body={data.body}
                                            favourites={favourites}
                                            handleFavourite={handleFavourite}
                                            id={data.id}
                                            key={data.id}
                                            title={data.title}
                                        />
                                    );
                                })
                            }
                        </div>
                }
            </div>
        </div>
    );
};

Favourites.propTypes = {
    favourites: PropTypes.array,
    handleFavourite: PropTypes.func
};

Favourites.defaultProps = {
    favourites: [],
    handleFavourite: () => {}
};

export default Favourites;

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './QueryResults.module.css';

import {ReactComponent as StarIcon} from 'assets/icons/star.svg';
import Search from 'components/Search/Search';

export const QueryResult = (props) => {
    const {title, body, id, favourites, handleFavourite} = props;
    const isActive = (favourites).findIndex((v) => v === id) !== -1;
    return (
        <>
            <StarIcon
                onClick={() => handleFavourite(id)}
                className={`
                    ${styles.starIcon} 
                    ${isActive && styles['starIcon--active']}
                `}
            />
            <div className='gutter'/>
            <div className={styles.titleLayout}>
                {title}
            </div>
            <div className='gutter'/>
            <div
                className={styles.bodyLayout}
                dangerouslySetInnerHTML = {{
                    // WasteData JSON provides html with char codes. Unescape parses the char codes as html tags
                    __html: _.unescape(body)
                }}
            />
        </>
    );
};

QueryResult.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    id: PropTypes.number.isRequired,
    favourites: PropTypes.array,
    handleFavourite: PropTypes.func
};

QueryResult.defaultProps = {
    title: '',
    body: '',
    favourites: [],
    handleFavourite: () => {}
};

const QueryResults = (props) => {
    const {result, handleSearch, favourites, handleFavourite} = props;
    return (
        <div className={styles.queryResultsContainer}>
            <div className={styles.queryResultsLayout}>
                <Search
                    handleSearch={handleSearch}
                />
                {result.length !== 0 &&
                    <div className={styles.gridLayout}>
                        {
                            (result).map((v) => (
                                <QueryResult
                                    body={v.body}
                                    favourites={favourites}
                                    id={v.id}
                                    key={v.id}
                                    title={v.title}
                                    handleFavourite={handleFavourite}
                                />
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    );
};

QueryResults.propTypes = {
    result: PropTypes.array,
    favourites: PropTypes.array,
    handleSearch: PropTypes.func,
    handleFavourite: PropTypes.func
};

QueryResults.defaultProps = {
    result: [],
    favourites: [],
    handleSearch: () => {},
    handleFavourite: () => {}
};

export default QueryResults;

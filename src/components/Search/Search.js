import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Search.module.css';
import {ReactComponent as SearchIcon} from 'assets/icons/search.svg';
import {ReactComponent as ClearIcon} from 'assets/icons/clear.svg';

const Search = (props) => {
    const [searchVal, setSearchVal] = useState('');
    const {handleSearch} = props;
    return (
        <div className={styles.searchLayout}>
            <div className={styles.inputContainer}>
                <input
                    type='text'
                    value={searchVal}
                    className={styles.searchInput}
                    placeholder='Search by keywords'
                    onChange = {(e) => setSearchVal(e.target.value)}
                    onKeyPress = {(e) => {
                        if (e.key === 'Enter') {
                            handleSearch(searchVal)
                        }
                    }}
                />
                {
                    searchVal !== '' &&
                    <ClearIcon
                        className={styles.clearIcon}
                        onClick={() => {
                            setSearchVal('');
                            handleSearch('');
                        }}
                    />
                }
            </div>
            <button className={styles.searchButton} onClick={() => handleSearch(searchVal)}>
                <SearchIcon className={styles.searchIcon}/>
            </button>
        </div>
    );
};

Search.propTypes = {
    handleSearch: PropTypes.func,
};

Search.defaultProps = {
    handleSearch: () => {}
};

export default Search;

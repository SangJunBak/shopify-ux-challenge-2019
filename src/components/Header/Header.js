import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/Header/Header.module.css';

const Header = (props) => {
    return (
        <div className={styles.headerLayout}>
            <h1 className={styles.headerTitle}>{props.title}</h1>
        </div>
    );
};

Header.propTypes = {
    title: PropTypes.string
};

Header.defaultProps = {
    title: ''
};

export default Header;

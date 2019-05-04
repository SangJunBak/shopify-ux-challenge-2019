import React from 'react';
import PropTypes from 'prop-types';
import styles from './Error.module.css';

import {ReactComponent as Kirby} from 'assets/icons/Kirby.svg'

const Error = (props) => (
    <div className={styles.errorContainer}>
        <div className={styles.errorLayout}>
            <Kirby className={styles.kirby}/>
            <div className={styles.errorTextLayout}>
                <h1 className={styles.errorHeading}>
                    {props.header}
                </h1>
                <p className={styles.errorBodyText}>
                    {props.body}
                </p>
            </div>
        </div>
    </div>
);

Error.propTypes = {
    header: PropTypes.string,
    body: PropTypes.string
};

Error.defaultProps = {
    header: '',
    body: ''
};

export default Error;

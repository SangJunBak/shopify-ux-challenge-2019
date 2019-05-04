import React from 'react';
import styles from './Loading.module.css';

import {ReactComponent as RecycleIcon} from 'assets/icons/recycle.svg';

const Loading = () => (
    <div className={styles.loadingLayout}>
        <RecycleIcon className={styles.recycleIcon}/>
    </div>
);

export default Loading;

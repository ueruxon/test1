import React from 'react';

import styles from './index.css';

import HeaderControls from './headerControls';

const Header = props => (
    <header>
        <h3 className={styles.title}>Add recipient</h3>
        <HeaderControls values={props} />
    </header>
);

export default Header;

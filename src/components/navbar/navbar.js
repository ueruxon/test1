import React from 'react';

import styles from './index.css';

const Button = ({ text, func, isActive }) => {
    const classBtn = text === isActive ? styles.active : '';

    return (
        <button className={`${styles.btn} ${classBtn}`} onClick={() => func(text)} >
            {text}
        </button>
    );
};

const NavBar = ({ deleteSelectRecipient, handleShowFilter, isActive }) => (
    <div className={styles.container}>
        <div className={styles.containerLeft}>
            <Button
                func={handleShowFilter}
                text="Show all"
                isActive={isActive}
            />
            <Button
                func={handleShowFilter}
                text="Show sent"
                isActive={isActive}
            />
            <Button
                func={handleShowFilter}
                text="Show unsent"
                isActive={isActive}
            />
        </div>
        <div className={styles.containerRight}>
            <button
                className={styles.btn}
                onClick={() => deleteSelectRecipient()}
            >
                Delete selected recipients
            </button>
        </div>
    </div>
);

export default NavBar;

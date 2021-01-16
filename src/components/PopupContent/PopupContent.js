import React from "react";

import styles from './PopupContent.module.css';

/*
*
*   This Component is just for content takes onClick as a prop from parent.
*
*/
const Popup = ({onClick}) => {
    return (
        <>
            <h2>See You Soon</h2>
            <p>You are leaving this page...</p>
            <button className={styles.button} onClick={onClick}>Close</button>
        </>
    )
}

export default Popup;
import React, { useState } from "react";

import ImageCard from '../components/ImageCard/ImageCard';
import styles from './CardContainer.module.css';

const CardContainer = () => {
    // Popup's enabled by default. User can toggle on / off. Checkbox is false / unchecked by default.
    const [showPopup, setPopup ] = useState(false);

    /*
    *
    *   On click checkbox becomes true, sets state to true.
    *
    */
    return (
        <>
            <h1 class={styles.heading}>Ashley Street, Indigo</h1>
            <div className={styles.container}>
                <h3 className={styles.popUpTitle}>Hide Popups?</h3>
                <input type="checkbox" onClick={e => {setPopup(e.target.checked)}} />
            </div>
            <ImageCard showPopup={showPopup}/>
        </>
    )
}

export default CardContainer;
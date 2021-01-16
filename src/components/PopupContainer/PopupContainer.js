import React, { useEffect, useRef } from "react";
import PopupContent from '../PopupContent/PopupContent';
import styles from './PopupContainer.module.css';

/*
*
*   This Component is just for content.
*
*/
const PopupContainer = ({ renderPopup, onClick }) => {
    const popUpRef = useRef(null);
    const body = document.querySelector('body');

    useEffect( () => {
        popUpRef.current.focus();
        popUpRef.current.scrollIntoView({
            behavior: "smooth",
          });

        body.style.overflow = 'hidden';

        return () => {
            body.style.overflow = 'auto';
        }
    })

    return (
        <>
            <div ref={popUpRef} role='dialog' aria-modal={renderPopup} className={styles.container}>
                <span className={styles.closingButton}>&times;</span>
                <PopupContent onClick={onClick} />
            </div>
        </>
    )
}

export default PopupContainer;
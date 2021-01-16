import React, { useEffect, useRef } from "react";
import PopupContent from '../PopupContent/PopupContent';
import styles from './PopupContainer.module.css';

/*
*
*   On render scroll this into view and lock the body, set the focus to this modal.
*   On unmount unlock the body
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
import React, { useEffect, useState, useRef } from "react";
import styles from './ImageCard.module.css';

import PopupContainer from '../PopupContainer/PopupContainer';

const ImageCard = ({ showPopup }) => {
    const [ appState, setAppState ] = useState({
        loading: true,
        data: null
    });
    const [ renderPopup, setRenderPopup] = useState(false);
    const popUpRef = useRef();

    /*
    *
    *   Fetch Images from URL
    * 
    */
    useEffect( () => {
        const url = 'https://picsum.photos/v2/list';

        fetch(url)
        .then(response => response.json())
        .then(data => {
            setAppState({
                loading: false,
                data: data
            })
        })
        .catch((error) => {
            setAppState({
                loading: false,
                data: error
            })
        })
    }, [])

    /*
    *
    *   Resuable function to show/hide the popup
    * 
    */
    function enablePopup() {
        renderPopup ? setRenderPopup(false) : setRenderPopup(true);
    }

    return (
        <>
        <div>
        {renderPopup && 
            <PopupContainer renderPopup={renderPopup} onClick={enablePopup} />
        }
        {appState.loading && 
            <p>Loading...</p>
        }
        {!appState.loading &&
            appState.data.map((item) => (
                <div className={styles.imageCard} onClick={!showPopup ? enablePopup : null}>
                    <div className={styles.imageContainer}>
                        <img className={styles.imageStyle} src={item.download_url} alt="from Picsum" />
                    </div>
                    <div className={styles.imageDetailsContainer}>
                        <h2>{item.author}</h2>
                        <p>Image Size: {item.width}&times;{item.height}</p>
                        <div>
                            <span>Download Here: </span>   
                            <a href={item.download_url}>{item.download_url}</a>
                        </div>
                    </div>
                </div>
            ))
        }
        </div>
        </>
    )
}

export default ImageCard;

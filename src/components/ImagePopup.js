import React from "react";

function ImagePopup({card, onClose}) {
    return(
        <div className={`popup popup_type_open-image ${card && 'popup_opened'}`}>
            <div className="popup__container-image">
                <img className="popup__picture" src={card.src} alt={card.name} />
                <p className="popup__figcaption">{card.name}</p>
                <button
                    type="button"
                    className="popup__button-close popup__button-close_type_image"
                    onClick={onClose}></button>
            </div>
        </div>
    )
}

export default ImagePopup;
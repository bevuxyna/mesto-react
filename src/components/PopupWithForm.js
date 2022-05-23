import React from 'react';

function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <button
                    type="button"
                    className={`popup__button-close popup__button-close_type_${props.name}`}
                    onClick={props.onClose}>
                </button>
                <h2 className="popup__title">{props.title}</h2>
                <form name="popup" className={`popup__form popup__form_type_${props.name}`}>
                    {props.children}
                    <button
                        type="submit"
                        className="popup__button-save popup__button-submit">Сохранить</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;
import React, {useContext, useState, useEffect, useRef} from 'react';
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditAvatarPopup(props) {
    const currentUser = useContext(CurrentUserContext);
    const avatarRef = useRef();

    useEffect(() => {
        avatarRef.current.value = '';
    }, [currentUser])


    useEffect(() => {
        avatarRef.current.value = '';
    }, [props.isOpen])


    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    return (
        <PopupWithForm
            name={'avatar'}
            title='Обновить аватар'
            isOpen={props.isOpen}
            onClose={props.onClose}
            buttonText='Сохранить'
            onSubmit={handleSubmit}
        >
            <input type="url" name="avatar" required placeholder="Ссылка на картинку" className="popup__input popup__input_type_avatar" id="avatar-link" ref={avatarRef} />
            <span className="popup__error avatar-link-error"></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;
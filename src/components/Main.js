import React from 'react';
import profile_picture from '../styles/images/profile_picture.jpg';


function Main(props) {
    return (
        <>
            <section className="profile">
                <div className="profile__content">
                    <img src={profile_picture} alt="Жак-Ив Кусто"
                         className="profile__avatar" />
                    <button type="button" className="profile__edit-avatar-button" onClick={props.onEditAvatar}></button>
                    <div className="profile__info">
                        <div className="profile__item">
                            <h1 className="profile__author">Жак-Ив Кусто</h1>
                            <button type="button" className="profile__edit-button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__description">Исследователь океана</p>
                    </div>
                </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
                <ul className="elements__box">

                </ul>
            </section>

            <div className="popup popup_type_profile">
                <div className="popup__container">
                    <button type="button" className="popup__button-close popup__button-close_type_profile"></button>
                    <h2 className="popup__title">Редактировать профиль</h2>
                    <form name="popup" className="popup__form popup__form_type_profile">
                        <input type="text" name="name" required placeholder="Имя" className="popup__input popup__input_type_name"
                               id="name" minLength="2" maxLength="40" />
                        <span className="popup__error name-error"></span>
                        <input type="text" name="about" required placeholder="О себе"
                               className="popup__input popup__input_type_about" id="about" minLength="2" maxLength="200" />
                        <span className="popup__error about-error"></span>
                        <button type="submit" className="popup__button-save popup__button-submit">Сохранить</button>
                    </form>
                </div>
            </div>

            <div className="popup popup_type_avatar">
                <div className="popup__container">
                    <button type="button" className="popup__button-close popup__button-close_type_avatar"></button>
                    <h2 className="popup__title">Обновить аватар</h2>
                    <form name="popup" className="popup__form popup__form_type_avatar">
                        <input type="url" name="avatar" required placeholder="Ссылка на картинку"
                               className="popup__input popup__input_type_avatar" id="avatar-link" />
                        <span className="popup__error avatar-link-error"></span>
                        <button type="submit" className="popup__button-avatar popup__button-submit">Сохранить</button>
                    </form>
                </div>
            </div>

            <div className="popup popup_type_add">
                <div className="popup__container">
                    <button type="button" className="popup__button-close popup__button-close_type_add"></button>
                    <h2 className="popup__title">Новое место</h2>
                    <form name="popup" className="popup__form popup__form_type_add">
                        <input type="text" name="name" required placeholder="Название"
                               className="popup__input popup__input_type_place" id="place" minLength="2" maxLength="30" />
                        <span className="popup__error place-error"></span>
                        <input type="url" name="link" required placeholder="Ссылка на картинку"
                               className="popup__input popup__input_type_link" id="link" />
                        <span className="popup__error link-error"></span>
                        <button type="submit" className="popup__button-edit popup__button-submit">Создать</button>
                    </form>
                </div>
            </div>
        </>



    )
}

export default Main
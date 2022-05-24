import React, {useState, useEffect} from 'react';
import Card from "./Card";
import api from "../utils/Api";

function Main(props) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getUserInfo()
            .then((res) => {
                setUserName(res.name);
                setUserDescription(res.about);
                setUserAvatar(res.avatar);
            })
            .catch((err) => {
                console.log('Error: ' + err);
            })

        api.getInitialCards()
            .then((res) => setCards(res))
            .catch((err) => {
                console.log(`Error: ${err}`);
            })
    }, [])

    return (
        <>
            <section className="profile">
                <div className="profile__content">
                    <img src={userAvatar} alt="Аватар"
                         className="profile__avatar" />
                    <button type="button" className="profile__edit-avatar-button" onClick={props.onEditAvatar}></button>
                    <div className="profile__info">
                        <div className="profile__item">
                            <h1 className="profile__author">{userName}</h1>
                            <button type="button" className="profile__edit-button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__description">{userDescription}</p>
                    </div>
                </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
                <ul className="elements__box">
                    {cards.map((card) => (
                        <Card card={card} key={card._id} onCardClick={props.onCardClick} />
                    ))}
                </ul>
            </section>

        </>
    )
}

export default Main;
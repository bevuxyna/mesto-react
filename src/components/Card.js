import React from 'react';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card({card, onCardClick, onCardLike}) {
    const currentUser = React.useContext(CurrentUserContext);

    const isOwn = card.owner._id === currentUser._id;

    const cardDeleteButtonClassName = (
        `element__delete-button ${isOwn ? 'element__delete-button_visible' : 'element__delete-button_hidden'}`
    );

    const isLiked = card.likes.some(item => item._id === currentUser._id);

    const cardLikeButtonClassName = `element__like-button ${isLiked ? 'element__like-button_active' : ''}`;

    //пробрасываем обработчик handleCardClick сквозь компонент Main в виде пропса onCardClick
    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card)
    }

    return (
    <article className="elements__item">
        <li className="element">
            <img className="element__image" src={card.link} alt={card.name} onClick={handleClick} />
            <button className={cardDeleteButtonClassName} type="button"></button>
            <div className="element__info">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__like">
                    <button className={cardLikeButtonClassName} type="button"></button>
                    <p className="element__like-count">{card.likes.length}</p>
                </div>
            </div>
        </li>
    </article>
    );
}

export default Card;
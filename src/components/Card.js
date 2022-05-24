import React from 'react';

function Card({card, onCardClick}) {

    //пробрасываем обработчик handleCardClick сквозь компонент Main в виде пропса onCardClick
    function handleClick() {
        onCardClick(card);
    }

    return (
    <article className="elements__item">
        <li className="element">
            <img className="element__image" src={card.link} alt={card.name} onClick={handleClick} />
            <button className="element__delete-button" type="button"></button>
            <div className="element__info">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__like">
                    <button className="element__like-button" type="button"></button>
                    <p className="element__like-count">{card.likes.length}</p>
                </div>
            </div>
        </li>
    </article>
    );
}

export default Card;
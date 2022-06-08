import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import React, {useState, useEffect} from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  };

    useEffect(() => {

        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([userData, cardsData]) => {
                setCurrentUser(userData);
                setCards(cardsData);
            })
            .catch((err) => {
                console.log(`Не удалось получить данные с сервера. ${err}`);
            })
            .finally(() => {

            });
    }, [])

    function handleCardLike(card) {
        const isLiked = card.likes.some(item => item._id === currentUser._id);

        api.changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            })
            .catch((err) => {
                console.log(`Ошибка ${err}`);
            })
    }

  return (
      <CurrentUserContext.Provider value={currentUser}>
          <div className="page__container">
              <div className="page">
                  <Header />

                  <Main
                      cards={cards}
                      onEditAvatar={handleEditAvatarClick}
                      onEditProfile={handleEditProfileClick}
                      onAddPlace={handleAddPlaceClick}
                      onCardClick={handleCardClick}
                      onCardLike={handleCardLike}
                  />

                  <Footer />

                  <PopupWithForm
                      name={'profile'}
                      title='Редактировать профиль'
                      isOpen={isEditProfilePopupOpen}
                      onClose={closeAllPopups}
                      buttonText='Сохранить'
                  >
                      <input type="text" name="name" required placeholder="Имя" className="popup__input popup__input_type_name"
                             id="name" minLength="2" maxLength="40" />
                      <span className="popup__error name-error"></span>
                      <input type="text" name="about" required placeholder="О себе"
                             className="popup__input popup__input_type_about" id="about" minLength="2" maxLength="200" />
                      <span className="popup__error about-error"></span>
                  </PopupWithForm>


                  <PopupWithForm
                      name={'avatar'}
                      title='Обновить аватар'
                      isOpen={isEditAvatarPopupOpen}
                      onClose={closeAllPopups}
                      buttonText='Сохранить'
                  >
                      <input type="url" name="avatar" required placeholder="Ссылка на картинку" className="popup__input popup__input_type_avatar" id="avatar-link" />
                      <span className="popup__error avatar-link-error"></span>
                  </PopupWithForm>


                  <PopupWithForm
                      name={'add'}
                      title='Новое место'
                      isOpen={isAddPlacePopupOpen}
                      onClose={closeAllPopups}
                      buttonText='Создать'
                  >
                      <input type="text" name="name" required placeholder="Название" className="popup__input popup__input_type_place" id="place" minLength="2" maxLength="30" />
                      <span className="popup__error place-error"></span>
                      <input type="url" name="link" required placeholder="Ссылка на картинку" className="popup__input popup__input_type_link" id="link" />
                      <span className="popup__error link-error"></span>
                  </PopupWithForm>

                  <ImagePopup card={selectedCard} onClose={closeAllPopups} />

              </div>

          </div>
      </CurrentUserContext.Provider>
  );
}

export default App;

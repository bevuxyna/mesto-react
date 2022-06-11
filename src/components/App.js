import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
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
                console.log(`Ошибка ${err}`);
            })
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

    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
                //обновление стейта cards с помощью метода filter: создаём копию массива, исключив из него удалённую карточку
                setCards((state) => state.filter((c) => c._id !== card._id && c));
            })
            .catch((err) => {
                console.log(`Ошибка ${err}`);
            })
    }

    function handleUpdateUser(data) {
        api.updateUserInfo(data)
            .then((res) => {
                setCurrentUser(res);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(`Ошибка ${err}`);
            })
    }

    function handleUpdateAvatar(data) {
        api.updateAvatar(data)
            .then(res => {
                setCurrentUser(res);
                closeAllPopups();
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
                      onCardDelete={handleCardDelete}
                  />

                  <Footer />


                  <EditProfilePopup
                      isOpen={isEditProfilePopupOpen}
                      onClose={closeAllPopups}
                      onUpdateUser={handleUpdateUser}
                  />

                  <EditAvatarPopup
                      isOpen={isEditAvatarPopupOpen}
                      onClose={closeAllPopups}
                      onUpdateAvatar={handleUpdateAvatar}
                  />




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

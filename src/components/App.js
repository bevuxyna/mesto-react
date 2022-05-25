import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React, {useState} from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

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

  return (
    <div className="page__container">
      <div className="page">
        <Header />

        <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
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
  );
}

export default App;

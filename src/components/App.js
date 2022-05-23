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

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  return (
    <div className="page__container">
      <div className="page">
        <Header />

        <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
        />

        <Footer />








        <div className="popup popup_type_delete">
          <div className="popup__container">
            <button type="button" className="popup__button-close popup__button-close_type_delete"></button>
            <h2 className="popup__title">Вы уверены?</h2>
            <form name="popup" className="popup__form popup__form_type_delete">
              <button type="submit" className="popup__button-delete popup__button-submit">Да</button>
            </form>
          </div>
        </div>








      </div>

    </div>
  );
}

export default App;

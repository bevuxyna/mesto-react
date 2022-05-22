import logo from '../styles/images/logo_mesto.svg';

function App() {
  return (
    <div className="App">
      <div className="page">
        <header className="header">
          <img src={logo} alt="Логотип MESTO RUSSIA" className="header__logo" />
        </header>

        <main>
          <section className="profile">
            <div className="profile__content">
              <img src="<%=require('./styles/images/profile_picture.jpg')%>" alt="Жак-Ив Кусто"
                   className="profile__avatar" />
              <button type="button" className="profile__edit-avatar-button"></button>
              <div className="profile__info">
                <div className="profile__item">
                  <h1 className="profile__author">Жак-Ив Кусто</h1>
                  <button type="button" className="profile__edit-button" aria-label="Редактировать профиль"></button>
                </div>
                <p className="profile__description">Исследователь океана</p>
              </div>
            </div>
            <button type="button" className="profile__add-button"></button>
          </section>

          <section className="elements">
            <ul className="elements__box">

            </ul>
          </section>

        </main>

        <footer className="footer">
          <p className="footer__copyright">&copy;&nbsp;2022 Mesto Russia</p>
        </footer>

        <template className="elements__item">
          <li className="element">
            <img className="element__image" src="src/components/App#" alt="#" />
            <button className="element__delete-button" type="button"></button>
            <div className="element__info">
              <h2 className="element__title"></h2>
              <div className="element__like">
                <button className="element__like-button" type="button"></button>
                <p className="element__like-count">0</p>
              </div>

            </div>

          </li>
        </template>

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

        <div className="popup popup_type_open-image">
          <div className="popup__container-image">
            <img className="popup__picture" src="src/components/App#" alt="#" />
            <p className="popup__figcaption"></p>
            <button type="button" className="popup__button-close popup__button-close_type_image"></button>
          </div>
        </div>

        <div className="popup popup_type_delete">
          <div className="popup__container">
            <button type="button" className="popup__button-close popup__button-close_type_delete"></button>
            <h2 className="popup__title">Вы уверены?</h2>
            <form name="popup" className="popup__form popup__form_type_delete">
              <button type="submit" className="popup__button-delete popup__button-submit">Да</button>
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

      </div>

    </div>
  );
}

export default App;

export default class UserInfo {
  constructor({ name, about, avatar }) {
    this._name = document.querySelector(name);
    this._about = document.querySelector(about);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    const userData = {
      name: this._name.textContent,
      about: this._about.textContent,
      avatar: this._avatar.src
    };

    return userData;
  }

  setUserInfo(data) {
    if (data.name || data.about || data.avatar) {
      this._name.textContent = data.name;
      this._about.textContent = data.about;
      this._avatar.src = data.avatar;
    } else {
      this._name.textContent = 'Нет данных, перезагрузите страницу';
      this._about.textContent = 'Нет данных, перезагрузите страницу';
    }
  }

}

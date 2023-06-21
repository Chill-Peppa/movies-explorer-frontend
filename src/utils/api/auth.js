export default class Auth {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _returnResponse(res) {
    if (res.ok) {
      return res.json();
    }
    /*return Promise.reject(`Ошибка: ${res.status}`);*/
    return res.text().then((text) => {
      return Promise.reject({
        statusError: res.status,
        error: JSON.parse(text).message,
      });
    });
  }

  //метод для регистрации пользователя
  register(name, email, password) {
    console.log(name, email, password);
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: `${name}`,
        email: `${email}`,
        password: `${password}`,
      }),
    }).then(this._returnResponse);
  }

  //метод для авторизации в системе
  authorization(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: `${email}`, password: `${password}` }),
    })
      .then(this._returnResponse)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          return data;
        }
      });
  }

  //метод проверки валидности токена
  checkToken() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(this._returnResponse)
      .then((data) => data);
  }
}

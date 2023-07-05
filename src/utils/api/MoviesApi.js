export default class MoviesApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _returnResponse(res) {
    if (res.ok) {
      return res.json();
    }

    /*return Promise.reject(`Ошибка: ${res.status}`);*/
    return res.text().then((text) => {
      return Promise.reject({
        statusError: res.statusCode,
        error: JSON.parse(text).message,
      });
    });
  }

  //универсальный метод запроса с проверкой ответа
  _request(url, options) {
    return fetch(url, options).then(this._returnResponse);
  }

  //метод, чтобы получить все фильмы через запрос к серверу
  getAllMovies() {
    return this._request(`${this._url}`, {
      headers: this._headers,
    });
  }
}

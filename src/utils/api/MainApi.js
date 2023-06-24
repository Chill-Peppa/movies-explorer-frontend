import { baseImgLink } from '../constants';

export default class MainApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _returnResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //универсальный метод запроса с проверкой ответа
  _request(url, options) {
    return fetch(url, options).then(this._returnResponse);
  }

  //GET с информацией пользователя с сервера
  getUserInfo() {
    return this._request(`${this._url}/users/me`, {
      headers: this._headers,
    });
  }

  //редактирование профиля
  updateUserInfo(data) {
    return this._request(`${this._url}/users/me`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    });
  }

  //получаем сохраненные фильмы
  getSavedMovies() {
    return this._request(`${this._url}/movies`, {
      headers: this._headers,
    });
  }

  //добавить в избранное
  saveMovie(movie) {
    return this._request(`${this._url}/movies`, {
      method: 'POST',
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${baseImgLink}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${baseImgLink}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
      headers: this._headers,
    }).then(this._returnResponse);
  }

  //удалить из избранного
  deleteMovie(id) {
    return this._request(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._returnResponse);
  }
}

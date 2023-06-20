import { emailRegexp, nameRegexp } from '../constants';

export const validateEmail = (email) => {
  //из-за того, что в самом начале при регистрации значение
  //почты undefined, делаю еще проверку на undefined
  if (email !== undefined) {
    if (email.length === 0) {
      return {
        error: 'Это поле обязательное для заполнения! ⛔️',
        activeButton: false,
      };
    } else if (emailRegexp.test(email.toLowerCase())) {
      return {
        error: '',
        activeButton: true,
      };
    } else if (!emailRegexp.test(email.toLowerCase())) {
      return {
        error: 'Неверный формат почты! Попробуйте ещё раз. ⛔️',
        activeButton: false,
      };
    }
  } else if (email === undefined) {
    return {
      error: '',
      activeButton: false,
    };
  }
};

export const validateName = (name) => {
  if (name !== undefined) {
    if (name.length === 0) {
      return {
        error: 'Это поле обязательное для заполнения! ⛔️',
        activeButton: false,
      };
    } else if (nameRegexp.test(name.toLowerCase())) {
      return {
        error: '',
        activeButton: true,
      };
    } else if (!nameRegexp.test(name.toLowerCase())) {
      return {
        error:
          'Имя может содержать только латиницу, кириллицу, пробел и дефис. ⛔️',
        activeButton: false,
      };
    }
  } else if (name === undefined) {
    return {
      error: '',
      activeButton: false,
    };
  }
};

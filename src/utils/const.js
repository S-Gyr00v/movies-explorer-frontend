export const VALIDATION_PARAMS = {
    REGEX: {
        NAME: /^[a-zа-яё-\s]+$/i,
        EMAIL: /[^@\s]+@[^@\s]+\.[^@\s]+/i,
    },
    MESSAGES: {
        NAME: 'Имя может состоять только из букв, пробелов и "-"',
        EMAIL: 'Неправильный формат e-mail',
    }
}

export const SERVER_URL = 'https://diplom-test23.herokuapp.com/'

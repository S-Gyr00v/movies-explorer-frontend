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

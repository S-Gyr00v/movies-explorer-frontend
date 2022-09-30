export function getMovies()  {

    return fetch('https://api.nomoreparties.co/beatfilm-movies')
    .then((response) => {
        return response.ok ? response.json() : Promise.reject(`Ошибка ${response.status}`)
    })
  
}
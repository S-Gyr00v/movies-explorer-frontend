import { SERVER_URL } from "./const"

export function getSavedMovies(token) {
    return fetch(SERVER_URL +'movies', 
    {
      headers: {
      'Content-Type': 'application/json',
       'Authorization': `Bearer ${token}`
    }
  }
)
    .then((response) => {
      return response.ok ? response.json() : Promise.reject(`Ошибка ${response.status}`)
    })

}

export function createMovie(token, movie) {
  return fetch(SERVER_URL +'movies', 
  {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
       'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(movie)
}
)
  .then((response) => {
    return response.ok ? response.json() : Promise.reject(`Ошибка ${response.status}`)
  })

}

export function deleteMovie(token, id) {
  return fetch(SERVER_URL + `/movies/${id}`, 
  {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
       'Authorization': `Bearer ${token}`
    },
}
)
  .then((response) => {
    return response.ok ? response.json() : Promise.reject(`Ошибка ${response.status}`)
  })

}

export function regisration(form) {
  return fetch(SERVER_URL + 'signup', 
  {
    method: "POST",
    headers: {
    'Content-Type': 'application/json'
  },
   body: JSON.stringify(form)
}
)
  .then((response) => {
    return response.ok ? response.json() : Promise.reject(`Ошибка ${response.status}`)
  })

}

export function login(form) {
  return fetch(SERVER_URL + 'signin', 
  {
    method: "POST",
    headers: {
    'Content-Type': 'application/json',
  },
 body: JSON.stringify(form)
}
)
  .then((response) => {
    return response.ok ? response.json() : Promise.reject(`Ошибка ${response.status}`)
  })

}

export function getInfoUser(token) {
  return fetch(SERVER_URL + 'users/me', 
  {
    headers: {
    'Content-Type': 'application/json',
     'Authorization': `Bearer ${token}`
  }
}
)
  .then((response) => {
    return response.ok ? response.json() : Promise.reject(`Ошибка ${response.status}`)
  })

}

export function getInfoUserUpdate(token, form) {
  return fetch(SERVER_URL + 'users/me', 
  {
    headers: {
    'Content-Type': 'application/json',
     'Authorization': `Bearer ${token}`
  },
  method : "PATCH",
  body: JSON.stringify(form)
}
)
  .then((response) => {
    return response.ok ? response.json() : Promise.reject(`Ошибка ${response.status}`)
  })
}


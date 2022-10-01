import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./App.css"
import Main from './../Main/Main';
import Movies from './../Movies/Movies';
import SavedMovies from './../SavedMovies/SavedMovies'
import Profile from './../Profile/Profile'
import Login from './../Login/Login'
import Register from './../Register/Register'
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from './../ProtectedRouter/ProtectedRoute';
import { useState, useEffect } from "react";
import { AppContext } from '../../contexts/appContext'
import { getMovies } from './../../utils/MainApi';
import { getSavedMovies, regisration, login, getInfoUser, getInfoUserUpdate } from './../../utils/MoviesApi';


function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [serverError, setServerError] = useState("")
  const navigate = useNavigate()
  const location = useLocation()
  const [resultUserUpdate, setResultUserUpdate] = useState("")
  const [savedFilms, setSavedFilms] = useState([])
  const [loading, setLoading] = useState(true)
  const [isDisabledButton, setDisabledButton] = useState(false)

  const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup'

  function realizeSavedCards() {
    const token = localStorage.getItem('JWT')
    return getSavedMovies(token)
      .then((films) => {
        setSavedFilms(films)
        return films
      })
      .catch((err) => {
        if (err.endsWith('401')) logOut()
      })
  }

  useEffect(() => {
    if (serverError) setServerError("")
    if (resultUserUpdate) setResultUserUpdate("")
  }, [location]
  )

  useEffect(() => {
    const token = localStorage.getItem('JWT')
    authorisationToken(token)
  }, []
  )

  function enterInAccount(form) {
    setDisabledButton(true)
    login(form)
      .then(({ token }) => {
        localStorage.setItem('JWT', token)
        authorisationToken(token)
      })
      .catch((err) => {
        setServerError("Произошла ошибка")
      })
      .finally(() => {
        setLoading(false)
      })

  }

  function authorisationToken(token) {
    if (!token) return setLoading(false)
    getInfoUser(token)
      .then((user) => {
        setCurrentUser(user)
        setIsLogin(true)
        if (isAuthPage) navigate("/movies")
      })
      .catch((err) => {
        if (err.endsWith('401')) logOut()
      })
      .finally(() => {
        setLoading(false)
      })
  }

  function registrationAccount(form) {
    setDisabledButton(true)
    regisration(form)
      .then((data) => {
        enterInAccount({ email: form.email, password: form.password })
      })
      .catch((err) => {
        setServerError("Произошла ошибка")
      })
      .finally(() => {
        setDisabledButton(false)
      })
  }

  function logOut() {
    setCurrentUser(null)
    setIsLogin(false)
    localStorage.removeItem('JWT')
    localStorage.removeItem('moviesState')
    // localStorage.removeItem('savedMoviesState')
  }

  function userUpdate(data) {
    const token = localStorage.getItem('JWT')
    setDisabledButton(true)
    getInfoUserUpdate(token, data)
      .then((user) => {
        setCurrentUser(user)
        setResultUserUpdate("Данные пользователя успешно обновлены")
      })
      .catch((err) => {
        setResultUserUpdate("Произошла ошибка")
        if (err.endsWith('401')) logOut()
      })
      .finally(() => {
        setDisabledButton(false)
      })



  }
  return (
    <>
      <AppContext.Provider value={{ currentUser, isLogin, setSavedFilms, savedFilms }}>


        <Routes>
          <Route
            path="/movies"
            element={
              <ProtectedRoute isLogin={isLogin} loading={loading}>
                <Movies savedFilms={savedFilms} realizeSavedCards={realizeSavedCards} />
              </ProtectedRoute>
            }
          />

          <Route path="/" element={<Main />} />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute isLogin={isLogin} loading={loading}>
                <SavedMovies savedFilms={savedFilms} realizeSavedCards={realizeSavedCards} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute isLogin={isLogin} loading={loading}>
                <Profile logOut={logOut} userUpdate={userUpdate} resultUserUpdate={resultUserUpdate} isDisabledButton={isDisabledButton} />
              </ProtectedRoute>
            }
          />

          <Route path="/signin" element={<Login enterInAccount={enterInAccount} serverError={serverError} isDisabledButton={isDisabledButton} />} />
          <Route path="/signup" element={<Register registrationAccount={registrationAccount} serverError={serverError} isDisabledButton={isDisabledButton} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppContext.Provider>
    </>
  )
}

export default App;

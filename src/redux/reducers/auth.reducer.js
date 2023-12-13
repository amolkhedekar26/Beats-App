import { LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/ActionTypes'

const user = JSON.parse(localStorage.getItem('user'))

const initialState = user
  ? { isLoggedIn: true, user, isSuccessfull: true }
  : { isLoggedIn: false, user: null, isSuccessfull: false }

export default function authReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
        isSuccessfull: true,
      }
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        isSuccessfull: false,
      }
    default:
      return state
  }
}

export const checkAuthSuccessful = (state) => state
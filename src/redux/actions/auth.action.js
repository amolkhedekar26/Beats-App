import { postRequest } from '../../axios/axiosClient'
import { LOGIN_SUCCESS, LOGIN_FAIL } from './ActionTypes'
import {toast} from "react-toastify"
export const login = (email, password) => async dispatch => {
  // try {
  //   const result = await postRequest('login', { email, password })
  //   console.log(result.data)
  //   dispatch({
  //     type: LOGIN_SUCCESS,
  //     payload: { user: result },
  //   })
  // } catch (err) {
  //   console.log(err)
  // }
  postRequest('login', { email, password }).then(res => {
    console.log(res.data)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user: res },
    })
    toaster.success()
  }).catch((error) => {
    if (error.response) {
      console.log(error.response.data) // => the response payload
    }
    toaster.error()
  })
  //   return AuthService.login(username, password).then(
  //     data => {
  //       dispatch({
  //         type: LOGIN_SUCCESS,
  //         payload: { user: data },
  //       })

  //       return Promise.resolve()
  //     },
  //     error => {
  //       const message =
  //         (error.response &&
  //           error.response.data &&
  //           error.response.data.message) ||
  //         error.message ||
  //         error.toString()

  //       dispatch({
  //         type: LOGIN_FAIL,
  //       })

  //       return Promise.reject()
  // }
}

const toaster = {
  success: function() {
    toast.success("Login successfull", {
      position: toast.POSITION.TOP_RIGHT,
      className:"toast-msg toast-success",
    });
  },
  error: function() {
    toast.error("Invalid email or password", {
      position: toast.POSITION.TOP_RIGHT,
      className:"toast-msg toast-error"
    });
  }
};
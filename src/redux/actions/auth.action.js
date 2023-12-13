import { postRequest } from '../../axios/axiosClient'
import { LOGIN_SUCCESS, LOGIN_FAIL } from './ActionTypes'
// import {toast} from "react-toastify"
import toast from 'react-hot-toast';
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

  toast.promise(postRequest('login', { email, password }), {
    loading: 'Please wait...',
    success: (res)=> res.data.message.details,
    error: (err)=> err.response.data.message.details,
  },{
    style: {
      minWidth: 'fit-content',
      display:'flex'
    },
    success: {
      duration: 51555000,
    },
    error:{
      duration:51555000
    }
  });

/*
  postRequest('login', { email, password }).then(res => {
    console.log(res.data)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user: res },
    })
    // toaster.success(res.data.message.details)


  }).catch((err) => {
    if (err.response) {
      console.log(err.response.data) // => the response payload
    }
    // toaster.error(err.response.data.message.details)
  }) */



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
  success: function(msg) {
    toast.success(msg, {
      position: toast.POSITION.TOP_RIGHT,
      className:"toast-msg toast-success",
      type:"success",
      theme:"light"

    });
  },
  error: function(msg) {
    toast.error(msg, {
      position: toast.POSITION.TOP_RIGHT,
      className:"toast-msg toast-error",
      type:"error",
      theme:"light"
    });
  }
};
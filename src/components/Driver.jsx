import React from 'react'
import MasterLayout from './layout/master.layout'
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { LoginPage } from '../pages/auth/login'
import { SignupPage } from '../pages/auth/signup'
import { HomePage } from '../pages/home/home'
import { useSelector } from 'react-redux'
import { getState } from '../redux/reducers/auth.reducer.js'

const Driver = () => {
  const state = useSelector(getState)
  const loggedIn = state.authReducer.isLoggedIn

  return (
    <>
      <Routes>
        <Route
          path="*"
          element={!loggedIn ? <Navigate to="/login" /> : <HomePage />}
        />
        <Route path="/home/*" element={<MasterLayout />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  )
}
export default Driver

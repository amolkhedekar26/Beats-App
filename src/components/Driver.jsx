import React, { useEffect, useState } from 'react'
import MasterLayout from './layout/master.layout'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from 'react-router-dom'
import { LoginPage } from '../pages/auth/login'
import { SignupPage } from '../pages/auth/signup'
import { HomePage } from '../pages/home/home'

const Driver = () => {
  const [token, setToken] = useState('s')
  const navigate = useNavigate()
  // useEffect(() => {
  //   if (!token) {
  //     navigate('/login')
  //   }
  // }, [])

  return (
    <>
      {/* <MasterLayout> */}
      <Routes>
        <Route
          path="*"
          element={!token ? <Navigate to="/login" /> : <HomePage />}
        />
        <Route path="/home/*" element={<MasterLayout />} />
        {/* <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/calender" element={<CalenderPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profile" element={<ProfilePage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      {/* </MasterLayout> */}
    </>
  )
}
export default Driver

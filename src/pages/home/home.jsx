import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageHeading } from '../../redux/actions'
import MasterLayout from '../../components/layout/master.layout'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { DashboardPage } from '../dashboard/dashboard'
import TeamsPage from '../teams/teams'
import { CalenderPage } from '../calender/calender'
import { SettingsPage } from '../settings/settings'
import { ProfilePage } from '../profile/profile'
import { LoginPage } from '../auth/login'
import { SignupPage } from '../auth/signup'

export const HomePage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // useEffect(() => {
  //   navigate('/home')
  // }, [])
  return (
    <>
      <MasterLayout></MasterLayout>
    </>
  )
}

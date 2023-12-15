import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getState } from '../redux/reducers/auth.reducer.js'
const PrivateRoutes = () => {
  const state = useSelector(getState)
  const loggedIn = state.authReducer.isLoggedIn

  return (
    loggedIn ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default PrivateRoutes;
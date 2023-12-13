import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageHeading } from '../../redux/actions'

export const ProfilePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPageHeading('Profile'))
  }, [])
  return <div>Profile</div>
}

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageHeading } from '../../redux/actions'

export const SettingsPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPageHeading('Settings'))
  }, [])
  return <div>Settings</div>
}

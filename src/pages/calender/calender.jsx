import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageHeading } from '../../redux/actions'

export const CalenderPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPageHeading('Calender'))
  }, [])
  return <div>Calender</div>
}

import React, { useEffect } from 'react'
import { IoMdLogOut } from 'react-icons/io'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Logo from '../assets/exam-logo.svg'
import { logout } from '../redux/actions/auth.action.jsx'
import { useNavigate } from 'react-router-dom'

const getHeading = state => state

export const Navigation = () => {
  const data = useSelector(getHeading, shallowEqual)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logoutHandler = () => {
    dispatch(logout())
    navigate('/login')
  }

  useEffect(() => {
  }, [data])

  return (
    <div className='navigation rounded-t-xl border-b bg-slate-100'>
      <nav className='navbar p-2 flex justify-between '>
        <div className='flex justify-between items-center'>
          <a href='/'>
            <img
              className='logo-img'
              src={Logo}
              alt='Beats Logo'
              title='Beats App'
            />
          </a>
          <div className='nav-title font-semibold'>
            {data.appData.pageHeading}
          </div>
        </div>
        <div className='flex items-center gap-4 text-lg'>
          <a onClick={logoutHandler} title='Logout'>
            <IoMdLogOut color='white' size={20} />
          </a>
          {/*<a href="https://twitter.com/Yazdun" target="_blank">*/}
          {/*  <BsTwitter color='white' />*/}
          {/*</a>*/}
        </div>
      </nav>
    </div>
  )
}

import React, { useEffect } from 'react'
import { BsGithub, BsTwitter } from 'react-icons/bs'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Logo from '../assets/exam-logo.svg'

const getHeading = state => state

export const Navigation = () => {
  const data = useSelector(getHeading, shallowEqual)
  useEffect(() => {}, [data])
  return (
    <div className="navigation rounded-t-xl border-b bg-slate-100">
      <nav className="navbar p-2 flex justify-between ">
        <div className="flex justify-between items-center">
          <a href="/">
            <img
              className="logo-img"
              src={Logo}
              alt="Beats Logo"
              title="Beats App"
            />
          </a>
          <div className="nav-title font-semibold">
            {data.appData.pageHeading}
          </div>
        </div>
        <div className="flex items-center gap-4 text-lg">
          <a href="https://github.com/Yazdun/react-fcc-forms" target="_blank">
            <BsGithub />
          </a>
          <a href="https://twitter.com/Yazdun" target="_blank">
            <BsTwitter />
          </a>
        </div>
      </nav>
    </div>
  )
}

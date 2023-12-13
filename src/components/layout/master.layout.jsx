import React, { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import { Navigation } from '../Navigation'
import { BiHomeSmile, BiUser } from 'react-icons/bi'
import { RiUserLine, RiUserFill } from 'react-icons/ri'

import { MdWorkspaces } from 'react-icons/md'
import { SlCalender } from 'react-icons/sl'
import { BsCalendar2Day } from 'react-icons/bs'
import { BsCalendar2DayFill } from 'react-icons/bs'

import { FiSettings } from 'react-icons/fi'

import { RiSettings4Line } from 'react-icons/ri'
import { RiSettings5Fill } from 'react-icons/ri'
import { MdOutlineDashboard } from 'react-icons/md'
import { MdDashboard } from 'react-icons/md'

import { MdWorkspacesOutline } from 'react-icons/md'
import { DashboardPage } from '../../pages/dashboard/dashboard'
import TeamsPage from '../../pages/teams/teams'
import { CalenderPage } from '../../pages/calender/calender'
import { SettingsPage } from '../../pages/settings/settings'
import { ProfilePage } from '../../pages/profile/profile'

const MasterLayout = props => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/dashboard')
  }, [])

  return (
    <div className="master-container">
      <Navigation />

      <div className="sidebar z-50">
        <ul className="sidebar-links rounded-xl">
          {/* <li className="link flex border-b-4 border-transparent  items-center justify-between gap-2 p-5 transition-all hover:border-b-4 hover:border-blue-600 hover:text-blue-600 hover:bg-gray-50">
            <Link to={'/'}>
              <div>
                <BiHomeSmile className="text-2xl link-icon transition-all " />
              </div>
              <span className="text-xs link-text transition-all ">Home</span>
            </Link>
          </li>
          <li className="link flex border-b-4 border-transparent  items-center justify-between gap-2 p-5 transition-all hover:border-b-4 hover:border-blue-600 hover:text-blue-600 hover:bg-gray-50">
            <Link to={'/teams'}>Teams</Link>
          </li>
          <li className="link flex border-b-4 border-transparent  items-center justify-between gap-2 p-5 transition-all hover:border-b-4 hover:border-blue-600 hover:text-blue-600 hover:bg-gray-50">
            <Link to={'/calender'}>Calender</Link>
          </li>
          <li className="link flex border-b-4 border-transparent  items-center justify-between gap-2 p-5 transition-all hover:border-b-4 hover:border-blue-600 hover:text-blue-600 hover:bg-gray-50">
            <Link to={'/settings'}>Settings</Link>
          </li>
          <li className="link flex border-b-4 border-transparent  items-center justify-between gap-2 p-5 transition-all hover:border-b-4 hover:border-blue-600 hover:text-blue-600 hover:bg-gray-50">
            <Link to={'/user'}>User</Link>
          </li> */}
          {items.map((item, idx) => {
            const { title, href, HIcon, Icon } = item
            return (
              <li key={title}>
                {/* <a
                      onClick={toggleSidebar}
                      href={href}
                      className="link flex border-b-4 border-transparent  items-center justify-between gap-2 p-5 transition-all hover:border-b-4 hover:border-blue-600 hover:text-blue-600 hover:bg-gray-50"
                    > */}
                <NavLink
                  className="sidebar-rainbow link flex border-r-4 border-transparent  items-center justify-between gap-2 p-5 transition-all hover:border-r-4 hover:border-blue-600 hover:text-blue-600 hover:bg-gray-50"
                  to={href}
                >
                  <div>
                    <Icon className="text-2xl link-icon transition-all " />
                  </div>
                  <span className="text-xs link-text transition-all ">
                    {title}
                  </span>
                </NavLink>
                {/* </a> */}
              </li>
            )
          })}
        </ul>
        <div className="main-content">
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/calender" element={<CalenderPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
          {props.children}
        </div>
      </div>
    </div>
  )
}

const items = [
  {
    title: 'Dashboard',
    Icon: MdOutlineDashboard,
    HIcon: MdDashboard,
    href: '/dashboard',
  },
  {
    title: 'Teams',
    Icon: MdWorkspacesOutline,
    HIcon: MdWorkspaces,
    href: '/teams',
  },
  {
    title: 'Calender',
    Icon: BsCalendar2Day,
    HIcon: BsCalendar2DayFill,
    href: '/calender',
  },
  {
    title: 'Settings',
    Icon: RiSettings4Line,
    Hicon: RiSettings5Fill,
    href: '/settings',
  },
  { title: 'Profile', Icon: RiUserLine, HIcon: RiUserFill, href: '/profile' },
  //   { title: 'Shop', Icon: FiShoppingCart, href: '' },
]

export default MasterLayout

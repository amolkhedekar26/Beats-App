import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AnimatePresence, motion } from 'framer-motion'
import { useClickAway } from 'react-use'
import { AiOutlineRollback } from 'react-icons/ai'
import { BiHomeSmile, BiUser } from 'react-icons/bi'
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2'
import { FiSettings, FiShoppingCart } from 'react-icons/fi'
import { SlCalender } from 'react-icons/sl'
import { MdWorkspaces } from 'react-icons/md'
import { TfiMenuAlt } from 'react-icons/tfi'

import { useDispatch, useSelector } from 'react-redux'
import { getPageHeading } from '../redux/actions'

export const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  useClickAway(ref, () => setOpen(false))
  const toggleSidebar = () => setOpen(prev => !prev)

  return (
    <>
      {/* <button
        onClick={toggleSidebar}
        className="toggle p-3 text-2xl rounded-xl"
        aria-label="toggle sidebar"
      >
        <TfiMenuAlt />
      </button> */}
      {!open && (
        <>
          {/* <div
            aria-hidden="true"
            className="sidebar fixed rounded-l-xl bottom-0 left-0 right-0 top-0 z-40 bg-[rgba(0,0,0,0.1)] backdrop-blur-sm"
          ></div> */}
          <div className="sidebar z-50 max-w-xs" ref={ref} aria-label="Sidebar">
            {/* <div className="flex items-center justify-between p-5 border-b-2 border-zinc-800">
              <span>Welcome</span>
              <button
                onClick={toggleSidebar}
                className="p-3 border-2 border-zinc-800 rounded-xl"
                aria-label="close sidebar"
              >
                <AiOutlineRollback />
              </button>
            </div> */}
            <ul className="sidebar-links rounded-xl">
              {items.map((item, idx) => {
                const { title, href, Icon } = item
                return (
                  <li key={title}>
                    {/* <a
                      onClick={toggleSidebar}
                      href={href}
                      className="link flex border-b-4 border-transparent  items-center justify-between gap-2 p-5 transition-all hover:border-b-4 hover:border-blue-600 hover:text-blue-600 hover:bg-gray-50"
                    > */}
                    <Link
                      onClick={toggleSidebar}
                      className="link flex border-b-4 border-transparent  items-center justify-between gap-2 p-5 transition-all hover:border-b-4 hover:border-blue-600 hover:text-blue-600 hover:bg-gray-50"
                      to={href}
                    >
                      <div>
                        <Icon className="text-2xl link-icon transition-all " />
                      </div>
                      <span className="text-xs link-text transition-all ">
                        {title}
                      </span>
                    </Link>
                    {/* </a> */}
                  </li>
                )
              })}
            </ul>
          </div>
        </>
      )}
    </>
  )
}

const items = [
  { title: 'Home', Icon: BiHomeSmile, href: '' },
  { title: 'Teams', Icon: MdWorkspaces, href: '/teams' },
  { title: 'Calender', Icon: SlCalender, href: '/calender' },
  { title: 'Settings', Icon: FiSettings, href: '/settings' },
  { title: 'Profile', Icon: BiUser, href: '/profile' },
  //   { title: 'Shop', Icon: FiShoppingCart, href: '' },
]

const framerSidebarBackground = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.3 },
}

const framerSidebarPanel = {
  initial: { x: '-100%' },
  animate: { x: 0 },
  exit: { x: '-100%' },
  transition: { duration: 0.3 },
}

const framerText = delay => {
  return {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      delay: 0.5 + delay / 10,
    },
  }
}

const framerIcon = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: {
    type: 'spring',
    stiffness: 260,
    damping: 20,
    delay: 1.5,
  },
}

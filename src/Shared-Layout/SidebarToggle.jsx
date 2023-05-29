import React from 'react'
import { AiOutlineBars } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { toggleSideBar } from '../Features/shared/sharedSlice'

const SidebarToggle = () => {

  const dispatch = useDispatch()


  return (
    <AiOutlineBars className='sidebar-toggle' onClick={() => dispatch(toggleSideBar())} />
  )
}

export default SidebarToggle
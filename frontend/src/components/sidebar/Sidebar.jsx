import React from 'react'
import SearchInput from './SearchInput'
import Logout from './Logout'
import Conversations from './Conversations'

const Sidebar = () => {
  return (
    <div className='flex flex-col border-r border-slate-500 p-4'>
        <SearchInput/>
        <div className="divider px-3"></div>
        <Conversations/>
        <Logout/>
    </div>
  )
}

export default Sidebar
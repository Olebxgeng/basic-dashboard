import React from 'react'
import{BsCart3, BsFillArchiveFill, BsFillGearFill, BsFillGrid3X3GapFill, BsGrid1X2Fill, BsListCheck, BsMenuButtonWideFill, BsPeopleFill} from "react-icons/bs"


function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sb-responsive" : ""}>
      <div className='sb-title'>
        <div className='sb-brand'>
          <BsCart3 className='icon_header'/> Shop
        </div>
        <span className='icon close-icon' onClick={OpenSidebar}>X</span>
      </div>
      <ul className='sb-list'>
        <li className='sb-list-item'>
          <a href="www.fakelink.com">
            <BsGrid1X2Fill className='icon'/> Dashboard
          </a>
        </li>
        <li className='sb-list-item'>
          <a href="www.fakelink.com">
            <BsFillArchiveFill className='icon'/> Products
          </a>
        </li>
        <li className='sb-list-item'>
          <a href="www.fakelink.com">
            <BsFillGrid3X3GapFill className='icon'/> Categories
          </a>
        </li>
        <li className='sb-list-item'>
          <a href="www.fakelink.com">
            <BsPeopleFill className='icon'/> Customers
          </a>
        </li>
        <li className='sb-list-item'>
          <a href="www.fakelink.com">
            <BsListCheck className='icon'/> Inventory
          </a>
        </li>
        <li className='sb-list-item'>
          <a href="www.fakelink.com">
            <BsMenuButtonWideFill className='icon'/> Reports
          </a>
        </li>
        <li className='sb-list-item'>
          <a href="www.fakelink.com">
            <BsFillGearFill className='icon'/> Setting
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
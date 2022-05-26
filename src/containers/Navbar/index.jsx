import React from 'react'
import { FcSettings } from 'react-icons/fc'


function Navbar(props) {

    return (
      <nav className="flex justify-between items-center h-16 bg-green-300 shadow-sm text-white font-bold">
        <h1 className="text-md lg:text-lg text-left w-1/3 pl-2">Sort Algorithms</h1>
        <button className="py-2 px-8 shadow-lg rounded-full bg-gradient-to-r from-green-400 to-green-500 hover:animate-bounce" onClick={() => props.setShowMenu(!props.showMenu)}>
          MENU
        </button>
        <div className="w-1/3 flex justify-end pr-2">
          <FcSettings className="hover:animate-newSpin hover:cursor-pointer" size={30} onClick={() => props.setShowPopUp(true)}/>
        </div>
      </nav>
  )
}

export default Navbar
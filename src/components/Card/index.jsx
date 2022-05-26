import React from 'react'


function Card({style, algorithmName, url, showMenu, setShowMenu, setSortAlgorithmName, isOdd}) {

  return (
    <div style={{ backgroundColor: style, width: isOdd === "200%" ? "" : "100%" }} 
        className="h-40 sm:h-72 lg:h-full text-gray-200 font-bold bg-gradient-to-r from-green-300 hover:cursor-pointer hover:animate-pulse sm:last:w-[200%] lg:last:w-full"
        onClick={() => {
            setSortAlgorithmName(algorithmName)
            setShowMenu(!showMenu)
    }}>
        <div className="h-full flex justify-center items-center ">
            <div style={{backgroundImage: `url('${url}')`}} className="w-10 h-10 bg-cover"></div>
            <div className="uppercase px-5 sm:text-lg" >
                {algorithmName}
            </div>
            <div style={{backgroundImage: `url('${url}')`}} className={`w-10 h-10 bg-cover`}></div>
        </div>
    </div>
  )
}

export default Card

import React, { useState } from 'react';
import { init } from './config';

import Navbar from './containers/Navbar';
import Mainsection from './containers/Mainsection';
import Menu from './containers/Menu';
import Card from './components/Card';


function App() {

  const [sortAlgorithmName, setSortAlgorithmName] = useState();
  const [showMenu, setShowMenu] = useState(true);
  const [showPopUp, setShowPopUp] = useState(false);


  return (
    <>
    { !showMenu && <>
      <Navbar setValue={setSortAlgorithmName} showMenu={showMenu} setShowMenu={setShowMenu} setShowPopUp={setShowPopUp}/>
      <Mainsection sortAlgorithm={sortAlgorithmName} showPopUp={showPopUp} setShowPopUp={setShowPopUp} setShowMenu={setShowMenu}/>
    </> }

    { showMenu && <Menu>
      {init.algorythm.map((val, index, arr) => {
        return <Card key={index} 
          style={init.colors[0]} 
          algorithmName={val.name} 
          url={val.imgUrl} 
          showMenu={showMenu}
          setShowMenu={setShowMenu} 
          setSortAlgorithmName={setSortAlgorithmName}
          isOdd={arr.length % 2 === 0 ? "100%" : "200%"} />
      })}
    </Menu> }
    </>
  )
}

export default App;

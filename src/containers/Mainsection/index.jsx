import React, { useState, useEffect, useRef } from 'react'


import H1 from '../../components/H1';
import { generateRandomNumberArray } from '../../utils/generateRandomArray';
import Button from '../../components/Button';

import { SortAlgorithms } from '../../utils/SortAlgorithms';
import SettingsMenu from '../SettingsMenu';

function Mainsection(props) {

  const [rangeValue, setRangeValue] = useState(100);
  const [maxElementsAmount, setMaxElementsAmount] = useState();
  const [speedValue, setSpeedValue] = useState(100);
    
  const [arrayToSort, setArrayToSort] = useState([]);

  const [isRunning, setIsRunning] = useState(false);

  const divWrapper = useRef()
  
  const [sortAlgorithm, setSortAlgorithm] = useState();
  
  useEffect(() => {
   
    setArrayToSort(generateRandomNumberArray(rangeValue))

  }, [rangeValue])

  useEffect(() => {
    
    setMaxRange(divWrapper).then(result => {
      setMaxElementsAmount(result)
      // setRangeValue(result)
    })
    
  }, [])

  useEffect(() => {
    setSortAlgorithm(new SortAlgorithms(arrayToSort, setArrayToSort, divWrapper.current.children, speedValue))
  }, [arrayToSort, speedValue])


  window.addEventListener('resize', () => {

    setMaxRange(divWrapper).then(result => {
      setMaxElementsAmount(result)
      // setRangeValue(result)
    })
    
  })

  const runAlgorithm = async(sortAlgorithm, algorithmName) => {
   
    switch(algorithmName) {
      case "BubbleSort": 
        return await sortAlgorithm.bubbleSort(); 
      case "InsertSort": 
        return await sortAlgorithm.insertSort();
      case "SelectSort":
        return await sortAlgorithm.selectSort();
      case "MergeSort": 
        return await sortAlgorithm.mergeSort();
      case "QuickSort": 
        return await sortAlgorithm.quickSort();
      case "HeapSort": 
        return await sortAlgorithm.heapSort();
      case "RadixSort LSD": 
        return await sortAlgorithm.radixSort();
      case "BeadSort/GravitySort": 
        return await sortAlgorithm.gravitySort(); 
      case "CocktailShakerSort": 
        return await sortAlgorithm.cocktailShakerSort();
      default: return;
    }

  }

  const setMaxRange = async (itemsWrapperElement) => {
    
    let elementWidth 

    try {
      elementWidth = await itemsWrapperElement.current.offsetWidth
    } catch{}

    const padding = 2 * 16;
    const spaceBetweenItems = 2;
    const minWidth = 0.08

    return Math.floor((elementWidth - padding) / (minWidth + spaceBetweenItems))
  }

  
  return (
    <main className="h-[calc(100vh-64px)]">
      
      <section className="h-1/6">
        <div className="flex justify-center py-2">
          <div className="px-2 w-1/3">

            <Button text='START' disabled={isRunning} callback={() => {
              if(!isRunning) {
                setIsRunning(true)
                runAlgorithm(sortAlgorithm, props.sortAlgorithm).then(result => setIsRunning(!result))
              }
            }} />
          </div>

          <div className="px-2 w-1/3">
            <Button text='MIESZAJ' disabled={isRunning} callback={() => {
              if(!isRunning)
                setArrayToSort(generateRandomNumberArray(rangeValue))
              }}/>
          </div>

          <div className="px-2 w-1/3">
            <Button text='RESET' disabled={false} callback={() => {
              window.location.reload();
              }}/>
          </div>

        </div>
        <H1 text={props.sortAlgorithm}/>

      </section>


      <section className="flex items-end justify-center h-5/6 w-full p-[16px]" ref={divWrapper}>
        { arrayToSort.map((val, index) => {
            return <div key={index} className="bg-black mx-px" style={{height: `calc(${val}/${rangeValue}*100%)`, width: `calc(100%/${rangeValue})` ,backgroundColor: 'black'}}>
              </div>
          })
        }
      </section> 
      
      {props.showPopUp && <SettingsMenu 
                      maxElementsAmount={maxElementsAmount} 
                      rangeValue={rangeValue} 
                      setRangeValue={setRangeValue}
                      speedValue={speedValue}
                      setSpeedValue={setSpeedValue}
                      setShowPopUp={props.setShowPopUp}
                      isRunning={isRunning}
                      />}

    </main>
  )
}

export default Mainsection
import React from 'react'
import Button from '../../components/Button'
import H1 from '../../components/H1'

function SettingsMenu({maxElementsAmount, rangeValue, setRangeValue, speedValue, setSpeedValue, setShowPopUp, isRunning}) {
  return (
    <section className="w-full h-full sm:w-96 absolute bg-white top-0 animate-showFromTop sm:animate-showFromRight sm:border-t-4 sm:border-b-4 sm:border-l-4  border-green-300 right-0">
        <H1 text='USTAWIENIA'/>  
        <div className="flex flex-col px-8">

          <div className="p-4">
            <label htmlFor="amountNumber" className="block">Wybierz ilość liczb do sortowania:</label>
            <input 
              className="accent-green-400 w-full"
              type="range" 
              name="amountNumber" 
              id="amountNumber" 
              min={2} 
              max={maxElementsAmount} 
              value={rangeValue} 
              onChange={(e) => {
                if(!isRunning)
                  setRangeValue(e.target.value) 
              }}
            />
            {rangeValue}
          </div>

          <div className="p-4">
            <label htmlFor="speedAlg" className="block">Wybierz prędkość działania algorytmu</label>
            <input 
              className="accent-green-400 w-full"
              type="range" 
              name='speedAlg' 
              id='speedAlg' 
              min={-1000} 
              max={1000} 
              value={speedValue} 
              onChange={(e) => {
                if(!isRunning)
                  setSpeedValue(e.target.value)
              }} 
            />
          </div>

          <div className="p-4">
            <Button
              text='OK' 
              callback={() => setShowPopUp(false)}
            />
          </div>

          {isRunning && <div className="text-center text-red-400">
            Podczas działania algorytmu zmiana ustawień została wyłączona
          </div>}

        </div>
    </section>
  )
}

export default SettingsMenu
//This is just a simple Template Component which returns the UI to be displayed when application is launched.
// Making this into individual compoents helps to add more information on to your UI in future and will be the single point of search to debug errors with template data.


import React from 'react';
import ClearButton from '../utilities/Button/ClearButton';
import DoRender from '../Render';
import useGetPlayers from '../doGetPlayers';
import useTimeStamp from '../TimeStamp';

const Header = () => {
    return(
        <header className="App-header">
        <span className="last-accessed">{useTimeStamp.timestamp}</span>
        <div className='container'>
          <div className='buttons'>
            <button onClick={() => useGetPlayers.getPlayers('json', '')}>
              Load Players Json
            </button>
            <button onClick={() => useGetPlayers.getPlayers('database', '')}>
              Load Players DB
            </button>
            <button onClick={() => useGetPlayers.getPlayers('api', '')}>
              Load Players API
            </button>

            {/* Here the idea is to make the Clear button logic into seperate component which is easy to debug and re-use the same componet in future, helps while scaling */}
            
            <ClearButton/>

          </div>
          <div className={'players-list'}>

            {/* Here the idea is to make the Render on button click logic into seperate component which is easy to debug and re-use the same componet in future, helps while scaling */}

            <DoRender />
            
          </div>
        </div>
      </header>
    )
}
export default Header;
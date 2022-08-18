// import logo from './logo.svg'; 
//If the imports are not being utilized in any individual file, it is always better to delete them, so they don't throw warnings during compilation and build of the application.


import { useState, useEffect } from 'react';
import './App.css';

import ReadPlayersFromDatabase from './Players/readPlayersFromDatabase';
import ReadPlayersFromJsonString from './Players/readPlayersFromJsonString';
import DisplayPlayersFromDatabase from './Players/displayPlayersFromDatabase';
import DisplayPlayersFromJson from './Players/displayPlayersFromDatabase';
//import TimeStamp from './TimeStamp';
import useTimeStamp from './TimeStamp';

import PlayersResponse from './api';
import ClearButton from './utilities/Button/ClearButton';
import DoRender from './Render';

// import {
//   readPlayers,
//   //readPlayersFromJsonString,
//   //readPlayersFromDatabase,
//   //displayPlayersFromJson,
//   //displayPlayersFromDatabase,
//   displayPlayersFromApi
// } from './Players/Players'

function App() {

  const [players, setPlayers] = useState([]);
  const timestamp = useTimeStamp();
  //const [timestamp, setTimestamp] = useState();
  


  const doGetPlayers = async (source, fileName) => {

    const timestamp = useTimeStamp();
    // const rightNow = new Date();
    // setTimestamp(`Data last changed: ${rightNow.toLocaleTimeString()}`);

    let players;
    switch (source) {
      case 'json':
        players = JSON.parse(<ReadPlayersFromJsonString/>)
        //players = JSON.parse(readPlayersFromJsonString());
        setPlayers(<DisplayPlayersFromJson/>)
        //setPlayers(displayPlayersFromJson(players))
        break;

      case 'database':
        players = <ReadPlayersFromDatabase/>
        //players = readPlayersFromDatabase();
        setPlayers(<DisplayPlayersFromDatabase/>)
        //setPlayers(displayPlayersFromDatabase(players))
        break;

      case 'api':
        // const playersResponse = await fetch('api/getPlayersFromFile/.%2Fdata%2Fplayerdata.json', {
        //   headers: {
        //     'accept': 'application/json'
        //   }
        // });

        // players = JSON.parse(await playersResponse.json());
        // const responseDisplay = await fetch('/ui/getApiRenderResponseDisplay', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify(players)
        // });
        const responseText = await PlayersResponse.responseDisplay.text();
        // const responseText = await responseDisplay.text();
        const responseArray = JSON.parse(responseText);
        setPlayers(responseArray.join(''));
        break;
    }
  }

  //  const doPlayersClear = () => {
  //   useTimeStamp('');
  //   setPlayers([]);
  //  }

  // useEffect(()=>{
  //   useTimeStamp('');
  // },[setPlayers])

  // const doRender = () => {
  //   if (typeof players === 'object') {
  //     return (
  //       <ul>
  //         {players}
  //       </ul>
  //     );
  //   } else { 
  //     return (
  //       <ul dangerouslySetInnerHTML={{__html: players}} />
  //     );
  //   }
  // }

  return (
    <div className="App">
      <header className="App-header">
        <span className="last-accessed">{timestamp}</span>
        <div className='container'>
          <div className='buttons'>
            <button onClick={() => doGetPlayers('json', '')}>
              Load Players Json
            </button>
            <button onClick={() => doGetPlayers('database', '')}>
              Load Players DB
            </button>
            <button onClick={() => doGetPlayers('api', '')}>
              Load Players API
            </button>
            <ClearButton/>
            {/* <button onClick={() => doPlayersClear()}>
              Clear Players
            </button> */}
          </div>
          <div className={'players-list'}>
            <DoRender />
            {/* {doRender()} */}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

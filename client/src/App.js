// import logo from './logo.svg'; 
//If the imports are not being utilized in any individual file, it is always better to delete them, so they don't throw warnings during compilation and build of the application.


// import ReadPlayersFromDatabase from './Players/readPlayersFromDatabase';
// import ReadPlayersFromJsonString from './Players/readPlayersFromJsonString';
// import DisplayPlayersFromDatabase from './Players/displayPlayersFromDatabase';
// import DisplayPlayersFromJson from './Players/displayPlayersFromDatabase';
// import TimeStamp from './TimeStamp';
// import PlayersResponse from './api';
// import ClearButton from './utilities/Button/ClearButton';
// import DoRender from './Render';
// import { useState, useEffect } from 'react';

import React from 'react';
import './App.css';
import useTimeStamp from './TimeStamp';
import useGetPlayers from './doGetPlayers';
import Header from './Header';

function App() {


  //Idea here is to seperate the state management of Timestamp and fetching of api data into different components following the Single Responsibility Principle of SOLID

  const timestamp = useTimeStamp();
  const doGetPlayers = useGetPlayers();
  

  
  // const doGetPlayers = async (source, fileName) => {

  //   //const timestamp = useTimeStamp();
  //   // const rightNow = new Date();
  //   // setTimestamp(`Data last changed: ${rightNow.toLocaleTimeString()}`);

  //   let players;
  //   switch (source) {
  //     case 'json':
  //       players = JSON.parse(<ReadPlayersFromJsonString/>)
  //       //players = JSON.parse(readPlayersFromJsonString());
  //       setPlayers(<DisplayPlayersFromJson/>)
  //       //setPlayers(displayPlayersFromJson(players))
  //       break;

  //     case 'database':
  //       players = <ReadPlayersFromDatabase/>
  //       //players = readPlayersFromDatabase();
  //       setPlayers(<DisplayPlayersFromDatabase/>)
  //       //setPlayers(displayPlayersFromDatabase(players))
  //       break;

  //     case 'api':
  //       // const playersResponse = await fetch('api/getPlayersFromFile/.%2Fdata%2Fplayerdata.json', {
  //       //   headers: {
  //       //     'accept': 'application/json'
  //       //   }
  //       // });

  //       // players = JSON.parse(await playersResponse.json());
  //       // const responseDisplay = await fetch('/ui/getApiRenderResponseDisplay', {
  //       //   method: 'POST',
  //       //   headers: {
  //       //     'Content-Type': 'application/json'
  //       //   },
  //       //   body: JSON.stringify(players)
  //       // });
  //       const responseText = await PlayersResponse.responseDisplay.text();
  //       // const responseText = await responseDisplay.text();
  //       const responseArray = JSON.parse(responseText);
  //       setPlayers(responseArray.join(''));
  //       break;
  //   }
  // }

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
    <React.Fragment>
            <div className="App">
            <Header></Header>
            </div>
    </React.Fragment>
    );
  }
      // <header className="App-header">
      //   <span className="last-accessed">{timestamp}</span>
      //   <div className='container'>
      //     <div className='buttons'>
      //       <button onClick={() => doGetPlayers.getPlayers('json', '')}>
      //         Load Players Json
      //       </button>
      //       <button onClick={() => doGetPlayers.getPlayers('database', '')}>
      //         Load Players DB
      //       </button>
      //       <button onClick={() => doGetPlayers.getPlayers('api', '')}>
      //         Load Players API
      //       </button>

      //       {/* Here the idea is to make the Clear button logic into seperate component which is easy to debug and re-use the same componet in future, helps while scaling */}
            
      //      <ClearButton/>

      //    </div>
      //     <div className={'players-list'}>

      //      {/* Here the idea is to make the Render on button click logic into seperate component which is easy to debug and re-use the same componet in future, helps while scaling */}

      //     <DoRender />
            
      //    </div>
      //   </div>
      //  </header> 
  

export default App;

import React, {useState} from 'react';
import ReadPlayersFromDatabase from './Players/readPlayersFromDatabase';
import ReadPlayersFromJsonString from './Players/readPlayersFromJsonString';
import DisplayPlayersFromDatabase from './Players/displayPlayersFromDatabase';
import DisplayPlayersFromJson from './Players/displayPlayersFromDatabase';
import PlayersResponse from './api';


const useGetPlayers = () => {
    const [players, setPlayers] = useState([]);
    
    const getPlayers = async (source, fileName) => {

    let players;
    switch (source) {
      case 'json':
        players = JSON.parse(<ReadPlayersFromJsonString/>)
        setPlayers(<DisplayPlayersFromJson/>)
        break;

      case 'database':
        players = <ReadPlayersFromDatabase/>
        setPlayers(<DisplayPlayersFromDatabase/>)
        break;

      case 'api':
        const responseText = await PlayersResponse.responseDisplay.text();
        const responseArray = JSON.parse(responseText);
        setPlayers(responseArray.join(''));
        break;
    }
  }
  return {getPlayers}
}
  export default useGetPlayers;
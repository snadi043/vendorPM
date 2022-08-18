import React from 'react';

const PlayersResponse = () => {
    const playersResponse = await fetch('api/getPlayersFromFile/.%2Fdata%2Fplayerdata.json', {
    headers: {
      'accept': 'application/json'
    }
  });

  players = JSON.parse(await playersResponse.json());
  const responseDisplay = await fetch('/ui/getApiRenderResponseDisplay', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(players)
  });
}

export default PlayersResponse;
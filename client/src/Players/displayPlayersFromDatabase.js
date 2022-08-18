import React from 'react';

const DisplayPlayersFromDatabase = (players) => {
    return players.map((player, i) => {
        return (
          <li key={i}>
            <ul>
              <li className={"player-name"}>{player.name}</li>
              <li>{player.age}</li>
              <li>{player.job}</li>
              <li>{player.salary}</li>
            </ul>
          </li>
        )
      })
}

export default DisplayPlayersFromDatabase;
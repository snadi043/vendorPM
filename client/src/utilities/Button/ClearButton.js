import React from 'react';

const ClearButton = () => {
     const doPlayersClear = () => {
      useTimeStamp('');
        setPlayers([]);
    }

    return(
        <div>
            <button onClick={doPlayersClear}>
              Clear Players
            </button>
        </div>
    )
}
export default ClearButton;
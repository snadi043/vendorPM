import React, {useState} from 'react';

const useTimeStamp = () => {

    const [timestamp, setTimestamp] = useState();

    const rightNow = new Date();
    setTimestamp(`Data last changed: ${rightNow.toLocaleTimeString()}`);
}
return {timestamp}

export default useTimeStamp;
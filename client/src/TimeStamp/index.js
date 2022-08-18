// Aiming to create a Custom Hook to make the TimeStamp feature reusable. 
//Eventually, can plan to add the useState and useEffect into Custom hook as per the requirement

import React, {useState} from 'react';

const useTimeStamp = () => {

    const [timestamp, setTimestamp] = useState();

    const rightNow = new Date();
    setTimestamp(`Data last changed: ${rightNow.toLocaleTimeString()}`);
}
return {timestamp}

export default useTimeStamp;
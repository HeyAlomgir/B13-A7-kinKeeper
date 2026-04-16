import React, { useState } from 'react';
import { TimelineFried } from './TimelineFreind';

const TimelineProviderFriend = ({children}) => {

    const [audio,setAudio]=useState([]);
    const [text,setText]=useState([]);
    const[vedeo,setVedeo]=useState([]);

    const data ={
        audio,
        setAudio,
        text,
        setText,
        vedeo,
        setVedeo,
    }
    return <TimelineFried.Provider value={data}>{children}</TimelineFried.Provider>;
};

export default TimelineProviderFriend;
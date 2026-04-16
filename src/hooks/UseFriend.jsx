import React, { useEffect, useState } from 'react';

const UseFriend = () => {
        const [friends,setFriends]=useState([]);
        const [loding,setLoding]=useState(true);
        useEffect(()=>{
            const fetcData =async()=>{
                const res = await fetch("/data.json");
                const data =await res.json();
                setFriends(data);
                setLoding(false)
            }
            fetcData()
        },[]);
    return {friends,loding};
};

export default UseFriend;
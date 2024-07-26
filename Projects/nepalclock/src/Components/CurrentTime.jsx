import React from 'react';
import { useState , useEffect} from 'react';

const CurrentTime = () => {
     const [time, setTime ]= useState(new Date())
     useEffect(()=>{
        const intervalId = setInterval(() =>{
            setTime(new Date());

        },1000)

        return ()=>{
            clearInterval(intervalId);
            console.log("Cancelled the interval ")
        }

     },[]);
      

    return (
        <>
            <p className="lead">
                This is the current time: {time.toLocaleString()}
            </p>
        </>
    );
};

export default CurrentTime;

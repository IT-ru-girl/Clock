import React, {useEffect, useState} from 'react';
import c from './Clock.module.css'

const Clock = () => {

    // let date =

    let [hour,setHour]= useState(new Date())

    // let [min,setMin]= useState(date.getMinutes())
    //
    // let [sec,setSec]= useState(date.getSeconds())

    const updateTime =(t: number)=>{
        if (t < 10) {
            return  t + '0'
        } else return t
    }
    const currentMin =()=>{

        // let h=date.getHours()


        // let m= date.getMinutes()
        //  setMin(m)
        //
        // let s=date.getSeconds()
        //  setSec(s)
        let date =new Date()
        setHour(date)
        setTimeout(currentMin,1000)
    }

    useEffect(
        ()=>{
            setTimeout(currentMin,1000)},
    )
    return (
        <div className={c.block}>
            <span>
                 {updateTime( hour.getHours())} :
            </span>
             <span>
                 {updateTime(hour.getMinutes())} :
             </span> <span>
                 {updateTime(hour.getSeconds())}
             </span>


        </div>
    );
};

export default Clock;
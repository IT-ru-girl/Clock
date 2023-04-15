import React, {useEffect, useState} from 'react';
import c from './Clock.module.css'

const Clock = () => {

    // let date =

    let [date,setDate]= useState(new Date())

    // let [min,setMin]= useState(date.getMinutes())
    //
    // let [sec,setSec]= useState(date.getSeconds())

    const updateTime =(t: number)=>{
        if (t < 10) {
            return    '0' + t
        } else return t
    }
    // const currentMin =()=>{
    //
    //     // let h=date.getHours()
    //
    //
    //     // let m= date.getMinutes()
    //     //  setMin(m)
    //     //
    //     // let s=date.getSeconds()
    //     //  setSec(s)
    //     let date =new Date()
    //     setHour(date)
    //     setTimeout(currentMin,1000)
    // }

    useEffect(
        ()=>{
            setTimeout(()=> setDate(new Date),1000)},
    )
    return (
        <div className={c.block}>
            <span>
                 {updateTime( date.getHours())} :
            </span> <span>
                  {updateTime(date.getMinutes())} :
             </span> <span>
                 {updateTime(date.getSeconds())}
             </span>


        </div>
    );
};

export default Clock;
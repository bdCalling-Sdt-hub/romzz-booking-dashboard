import React, { useEffect, useMemo, useState } from 'react';
import { useGetProfileQuery } from '../redux/apislices/AuthSlices';
import { io } from 'socket.io-client';
import { socketUrl } from '../redux/api/apiSlice';
import { createContext } from 'react';
import { getFromLocalStorage } from '../Util/local-storage';
 
export const UserContext = createContext(null)

export const UserProvider = (props) => {   
    const token = getFromLocalStorage("bookingToken")
    const {data:profile} = useGetProfileQuery() 
    const [user , setUser] = useState() 
    const socket = useMemo(()=>io(socketUrl , {  extraHeaders: {
        Authorization: `Bearer ${token}`,
      }}),[]) 

    useEffect(()=>{ 
        const handleConnection = ()=>{
            console.log("connected to  socket server");
        }  

        socket.on("connect" , handleConnection) 
        return(()=>{
            socket.off("connect" , handleConnection)
        })
    } ,[socket]) 

    useEffect(()=>{
 if(profile){
    setUser(profile)
 }
    },[profile , setUser])

    return (
        <UserContext.Provider value={{user, socket , setUser}}>
             {props.children}
        </UserContext.Provider>
    );
};

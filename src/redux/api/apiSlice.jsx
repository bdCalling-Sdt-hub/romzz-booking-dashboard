import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getFromLocalStorage } from "../../Util/local-storage";
const token = getFromLocalStorage("bookingToken")
export const romzzApi = createApi({
    reducerPath: 'romzzApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.10.195:5000/api/v1'  ,
         headers:{Authorization: `Bearer ${token}`}}),  
         endpoints:()=>({})
    }) 

export const imageUrl = "http://192.168.10.195:5000/" 
export const socketUrl = "http://192.168.10.195:5000/"
import { getFromLocalStorage } from "../../Util/local-storage";
import { romzzApi } from "../api/apiSlice"; 

const resetToken = getFromLocalStorage("resetToken")

const authSlice = romzzApi.injectEndpoints({
    endpoints:(builder)=>({

        login:builder.mutation({
            query:(value)=>{  
                console.log("res" ,value);
                return{ 
                    url:"/auth/login" ,
                    method:"POST" ,
                    body: value
                }}}) , 

            forgetPass:builder.mutation({
                query:(value)=>({
                    url:"/auth/forgot-password" ,
                    method:"POST" ,
                    body:value
                })
            }),
 
            sendOtp:builder.mutation({
                query:(value)=>({
                    url:"/auth/verify-otp" ,
                    method:"POST" ,
                    body:value
                })
            }) , 

            resetPass:builder.mutation({
                query:(value)=>({
                    url:"/auth/reset-password" , 
                    headers:{authorization:resetToken} ,
                    method:"POST" ,
                    body:value
                })
            }) ,  

            getProfile:builder.query({
                query:()=>"/users/profile"
            }) , 

            updateProfile:builder.mutation({
                query:(value)=>({
                    url:"/users/update-profile" ,
                    method:"PATCH" ,
                    body: value
                })
            }) , 

            changePass:builder.mutation({
                query:(value)=>({
                    url:"/auth/change-password" ,
                    method:"POST" ,
                    body:value
                })
            })
    })
}) 

export const {useLoginMutation , useForgetPassMutation , useSendOtpMutation , useResetPassMutation ,useGetProfileQuery , useUpdateProfileMutation  ,useChangePassMutation} = authSlice
import { romzzApi } from "../api/apiSlice";

const chatSlices = romzzApi.injectEndpoints({
    endpoints:(builder)=>({

        getConversation:builder.query({
             query:(value)=>{  
                const params = new URLSearchParams() 
                if(value)params.append("search",value)
                return{
                    url:`/conversations?${params.toString()}`
                }
                 }

        }) , 

        getMessages:builder.query({
            query:(id)=>{
                return{
                    url:`/conversations/${id}`
                }
            }
        }) , 

        sendMessage:builder.mutation({ 
            query:({personId , formData})=>{
                return{
                    url:`/messages/${personId}` ,
                    method:"POST" ,
                    body: formData
                }
            }
        })

    }) 
}) 

export const {useGetConversationQuery ,useGetMessagesQuery ,useSendMessageMutation  } = chatSlices
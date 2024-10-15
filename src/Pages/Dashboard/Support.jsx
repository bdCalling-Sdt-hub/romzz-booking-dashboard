import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Form, Input } from "antd";
import { IoSendSharp } from "react-icons/io5";
import { useGetConversationQuery, useGetMessagesQuery, useSendMessageMutation } from "../../redux/apislices/ChatSlices";
import moment from "moment";
import { imageUrl } from "../../redux/api/apiSlice";
import { useGetProfileQuery } from "../../redux/apislices/AuthSlices";
import {ImagePlus,} from "lucide-react"; 
import { UserContext } from "../../Provider/UserProvider";


const Support = () => { 
  const [person, setPerson] = useState(null);
  const [personId, setpersonId] = useState(null);   
  const [image , setImage] = useState(null)  
  const [searchValue , setSearchValue] = useState("") 
  const [text , setText] = useState(null)
  const {data:profile} = useGetProfileQuery()
  const {data:conversation} = useGetConversationQuery(searchValue)  
  const conversationList = conversation?.data 
  const {data:messages} = useGetMessagesQuery(personId)  
  const [sendMessage] = useSendMessageMutation()  
 const userMessages = messages?.data 
 const [messageList , setMessageList] = useState([])  
 const {socket} = useContext(UserContext)   
 const scrollRef  = useRef() 
 const adminId = profile?.data?._id   
 const [form] = Form.useForm()

 const handleChangeImage =(e)=>{
   const file =  e.target.files?.[0] 
   if(file){
    setImage(file)
   }
 } 

 const ConversationSearch =(e)=>{
  const search = e.target.value 
  setSearchValue(search)
 }

 useEffect(()=>{ 
    setMessageList(userMessages);
 },[userMessages]) 

 useEffect(() => {
  if (scrollRef.current) {
    //@ts-ignore
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }
}, [messageList]);  


const handleConnection = useCallback(
  ({data})=>{
    setMessageList((prev)=>[...prev , data])
  },[]
) 

useEffect(() => {
  const event = "messageReceived";
  socket.on(event, handleConnection);
  return () => {
    socket.off(event, handleConnection);
  };
}, [socket]);


  const handleMessage = (value) => {
    setPerson(value);
    setpersonId(value?._id);
  }; 

 const onSearchChange =(e)=>{
  const searchValue= e.target?.value  
  setText(searchValue)
 }

  const handleSendMessage = async(values) =>{  
    const formData = new FormData() 
    if(image){
      formData.append("image",image)
    } 
    formData.append("content",values?.text)
    
    await sendMessage({personId , formData}).then((res)=>{
      console.log(res);
      if(res?.data?.success){ 
        form.resetFields();
        setText(null)
      }
    }) 
   
    setImage(null);

  }
  return (
    <div className=" ">
      <h3
        style={{
          color: "#00809E",
          fontSize: 24,
          fontWeight: "500",
          marginBottom: "12px",
        }}
      >
        Messages
      </h3>

      <div className=" grid grid-cols-12 gap-10 h-[81vh] me-5">
        <div className=" col-span-4  bg-[#FCFCFC] rounded-xl px-2 py-4 ">
          {/* search  */}
          <div
            className="mx-auto"
            style={{
             
              height: "40px",
              borderRadius: "8px",
              marginBottom: "10px",
            }}
          >
            <Input
              placeholder="Search..." 
              onChange={ConversationSearch}
              prefix={<FiSearch size={14} color="#868FA0" />}
              style={{
                width: "100%",
                height: "100%",
                fontSize: "14px",
              }}
              size="middle"
            />
          </div>

          {/* message list  */}
          {conversationList?.map((value, index) => (
            <div key={index} onClick={() => handleMessage(value)}>
              <div
                className={`flex justify-between  px-2 py-2 shadow-sm rounded-lg  shadow-[#6A6A6A] mb-5 ${
                  personId === value?._id ? "bg-[#E7EBED]" : "bg-white"
                }`}
              >
                <div className="flex items-center gap-2"> 
                  <img src={`${imageUrl}${value?.createdBy?.avatar}`} alt=""  style={{height:40 , width:40 , borderRadius:"100%"}}/>
                  <div className="flex-col gap-1">
                    <p className="text-[#12354E] font-medium text-[16px] ">
                      {" "}
                      {value?.createdBy?.fullName}{" "}
                    </p>
                    <p className="text-[#6A6A6A] text-[14px]"> {value?.lastMessage?.content}</p>
                  </div>
                </div>
                <p className="text-[#6A6A6A] text-[15px]"> {moment(value?.createdAt).format('h:mm a')}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-8 bg-[#FCFCFC] rounded-xl p-2 ">
          {personId ? (
            <div className="fixed overflow-hidden h-[80vh] w-[110vh]">
              {/* header   */}
              <div className=" flex items-center gap-3 py-2 px-3 "> 
                <img src={`${imageUrl}${person?.createdBy?.avatar}`} alt=""  style={{height:45 , width:45 , borderRadius:"100%"}} />
                <p className=" text-[20px]">{person?.createdBy?.fullName} </p>
              </div>

              {/* content  */}
              <div className=" bg-[#E6F2F5]  w-full h-[70vh] rounded-lg relative chat overflow-y-auto " ref={scrollRef}>
                <div className=" py-6 px-8   ">
                  {messageList?.map((value, index) => (
                    <div
                      key={index}
                      className={` flex mb-2 w-full  ${
                        adminId == value?.senderId
                          ? "items-end justify-end w-1/2"
                          : "items-start justify-start w-1/2"
                      } `}
                    > 
                    <div> 
                    {value?.attachments.length > 0 && (
                      <div className={` flex  ${
                        adminId === value?.senderId
                          ? "items-end justify-end w-full"
                          : "items-start justify-start w-full"
                      } `}>
                        {value?.attachments?.map(
                          (images, index) => (
                            <img key={index}
                              src={`${imageUrl}${images}`}
                              alt=""
                        
                              className=" w-1/2 h-[200px] p-2 rounded-lg"
                            />
                          )
                        )}
                      </div>
                    ) }

                      <div
                        className={` w-full px-4 py-2 flex-col gap-1 ${
                          adminId == value?.senderId
                            ? " bg-white rounded-t-xl rounded-bl-xl"
                            : " bg-[#E5E5E5]  rounded-t-xl rounded-br-xl"
                        }`}
                      >
                        <p className="w-[55vh]">{value?.content} </p>
                        <p className="text-end text-[12px] text-[#918d8d]">
                        {moment(value?.createdAt).format('h:mm a')}                  
                        </p>
                      </div>
                    </div>
                    </div>
                  ))}
                </div>
                </div>
                {/* footer  */}
                <div className=" absolute bottom-0 w-full ps-0 bg-white "> 
                <div
              style={{ display: image ? "block" : "none" }}
              className="absolute left-2 -top-20 "
            >
              <div
                className="relative w-20 h-20"
               
              > 
              {/* <p className="text-red-500 font-bold absolute -top-0 -right-1 text-[16px] bg-white px-1 rounded-full"  onClick={() => setImage(null)}>X</p>   */}
                {image && (
                  <img
                    alt="message-image"
                    src={URL?.createObjectURL(image)}
                  
                    style={{height:"80px" , width:"100px"}}
                  />
                )}
              </div>
            </div>  
                  <Form className="flex items-center justify-center gap-2  py-2 " onFinish={handleSendMessage} form={form}> 

                  <div >
              <input
                onChange={handleChangeImage}  
                id="image"
                type="file"
         style={{display:"none"}}
              />
              <label
                htmlFor="image"
                className="w-10 h-10 cursor-pointer rounded-full bg-[#F7F7F7] flex items-center justify-center"
              >
                <ImagePlus size={24} color="#3399B1" />
              </label>
                   </div>  

                   
              <Form.Item
                style={{ marginBottom: 0 }}
                className="flex-1"
                name="text"
              >
           <Input
                      className="w-[100%] h-[42px] resize-none  rounded-l-full px-3 rounded-r-full  bg-gray-100 border border-gray-200"
                      placeholder="Type your message" 
                      onChange={onSearchChange}
        
                    />
              </Form.Item> 


                  
                    <button  type="submit" className="h-[40px] w-[40px] bg-[#00809E]  text-white rounded-full flex justify-center items-center">
                      {" "}
                      <IoSendSharp size={22} />
                    </button>
                  </Form>
                </div>
             
            </div>
          ) : (
            <div className=" flex justify-center items-center h-full w-full">
              <h1 className="text-black text-lg font-semibold ">
                {" "}
                Start Chat....
              </h1>{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Support;

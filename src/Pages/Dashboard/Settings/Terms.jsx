import React, { useState, useRef, useMemo, useEffect } from "react";
import JoditEditor from "jodit-react";
import Swal from "sweetalert2";
import { useGetTermsQuery, useUpdateTermsMutation } from "../../../redux/apislices/DashboardSlices";

const Terms = () => {
  const editor = useRef(null); 
  const {data:terms , refetch} = useGetTermsQuery()  
  const [updateTerms] = useUpdateTermsMutation()
  // console.log(terms?.data[0]);  
  const termsContents = terms?.data[0]
  const [content, setContent] = useState("");
  const [isLoading, seLoading] = useState(false); 

  useEffect(()=>{ 
    setContent(termsContents?.termsContent)
  },[termsContents]) 

  const handleSubmit =async()=>{
 const data = {
  createdBy: termsContents?._id ,
  termsContent:content
 } 
 await updateTerms(data).then((res)=>{
  console.log(res); 
  if(res?.data?.success){
    Swal.fire({
        text:res?.data?.message,
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        refetch(); 
        
      })
}else{
    Swal.fire({
        title: "Oops",
        text: res?.error?.data?.message,
        icon: "error",
        timer: 1500,
        showConfirmButton: false,
      });
  
}
 })
  }

  const config = {
    readonly: false,
    placeholder: "Start typings...",
    style: {
      height: 400,
      background: "#FDFDFD",
    },
  };
  return (
    <div className="  px-4 py-2 rounded-lg pb-10 ">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "16px 0",
        }}
      >
        <div>
          <h3
            style={{
              color: "#00809E",
              fontSize: 24,
              fontWeight: "500",
            }}
          >
            Terms & Condition
          </h3>
        </div>
        <div></div>
      </div>
      <div>
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          tabIndex={1}
          onBlur={(newContent) => setContent(newContent)}
          onChange={(newContent) => {}}
        />
      </div>
      <div
        style={{
          marginTop: 24,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={()=>handleSubmit()}
          style={{
            height: 44,
            width: 150,
            backgroundColor: "#00809E",
            color: "white",
            borderRadius: "8px",
            fontWeight: 500,
            fontSize: 14,
          }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Terms;

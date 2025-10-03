import { useState } from "react";
import CrossIcon from "../icons/CrossIcon";
import { Button } from "./Button";


//controlled component 
export default function CreateContentModel({open , Onclose}){
      
    return(
        <div>


       
        {open &&  <div className="w-full flex justify-center h-screen bg-slate-500 fixed opacity-60 top-0 left-0">
           
            <div className="flex flex-col justify-center p-4 rounded-md">

                <span className="bg-white opacity-100">
                    <div className="flex justify-end  cursor-pointer  ">

                        <div onClick={Onclose}>

                            <CrossIcon  />

                        </div>
                           
                    </div>

                    <div>

                        <Input placeholder={"Title"} />
                        <Input placeholder={"Link"}/>

                    </div>

                    <div className="flex justify-center p-4 ">
                    <Button variant="primary" text="Submit"  />


                    </div>


                </span>

            </div>


        </div>

        }


          </div>
    )
}

function Input({onChange , placeholder}){
     return(
        <div>
            
            <input type={"text" } placeholder={placeholder} className="px-4 py-2 border rounded-md m-2" onChange={onChange}></input> 
            
            
        </div>
     )
}
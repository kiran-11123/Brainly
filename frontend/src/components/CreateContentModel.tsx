import { useState } from "react";
import CrossIcon from "../icons/CrossIcon";
import { Button } from "./Button";


//controlled component 
export default function CreateContentModel({ open, Onclose }) {

    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");

    return (
        <div>



            {open && <div className="w-full flex justify-center h-screen bg-slate-500 fixed opacity-60 top-0 left-0 rounded-md ">

                <div className="flex flex-col justify-center p-4 rounded-md ">

                    <span className="bg-white opacity-100 rounded-md max-w-sm">
                        <div className="flex justify-end  cursor-pointer p-2 text-black w-full">

                            <div onClick={Onclose} className="bg-red-900 rounded-full">

                                <CrossIcon />

                            </div>

                        </div>

                        <div>

                            <Input placeholder={"Title"} onChange={(e) => setTitle(e.target.value)} />
                            <Input placeholder={"Link"} onChange={(e) => setLink(e.target.vlaue)} />


                            <div className="flex justify-center p-4 ">
                                <button className="px-4 py-2 rounded bg-blue-800 text-white hover:bg-blue-950"> Submit </button>


                            </div>


                        </div>



                    </span>

                </div>


            </div>

            }


        </div>
    )
}

function Input({ onChange, placeholder }) {
    return (
        <div className="w-full">

            <input type={"text"} placeholder={placeholder} className="px-6 py-3 border rounded-md m-2" onChange={onChange}></input>


        </div>
    )
}
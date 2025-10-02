import { ShareIcon } from "../icons/ShareIcon";
import {Tweet} from 'react-tweet'
interface CardProps{
    title:string,
    link:string,
    type:"twitter" | "youtube"
    
}

export default function Card({title , link ,type} :CardProps){

    return(
        <div className="bg-white p-4 border border-gray-200
         max-w-72  rounded-md  outline-slate-200">
             
            <div className="flex items-center justify-between">

                <div className="flex items-center text-md">
                      <div className="pr-2 text-gray-500 ">
                        <ShareIcon size="md" />

                    </div>

                   {title}

                </div>
                <div className="flex items-center">

                    <div className="pr-2 text-gray-500">
                        <a href={link} target="_blank" >
                         <ShareIcon size="md" />
                        </a>

                    </div>

                    
                    <div className=" text-gray-500">

                        <ShareIcon size="md" />

                    </div>
                    
                       

                </div>

                

            </div>

            <div className="pt-4">

                {type==="youtube" &&  <iframe className="w-full"
                 src="https://www.youtube.com/embed/K3nRKezdDIM?si=bsmOIbV7R4VNzuCz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>   }

                <div className="dark">
        <Tweet id="1680555380416577536"/>
      </div>
                
            </div>
          


        </div>
    )



      
}
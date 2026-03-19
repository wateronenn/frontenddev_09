'use client' 
import styles from './card.module.css'
import Image from 'next/image'


export default function Card({children,contentName} : {children:React.ReactNode, contentName:string}){
    
    function onVenueSelected(){
        //alert("Card "+ contentName +" is Clicked");
    }
    
    return(
        <div className="w-full h-[500px] bg-white rounded-lg !p-4
                        shadow-[0_15px_30px_rgba(160,160,255,0.5)]
                        transition-all duration-300
                        hover:shadow-[0_20px_40px_rgba(125,255,125,0.6)]
                        hover:scale-105
                        cursor-pointer
                        "
                        
        onClick={()=>onVenueSelected()}>
            {children}
        </div>
    );
}
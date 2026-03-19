import styles from './card.module.css'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import { Rating } from '@mui/material';

export default function Card({venueName,imgSrc,venueDes,onCompare} : {venueName:string, imgSrc:string,venueDes:string,onCompare?:Function}){    
    return(
        <InteractiveCard contentName={venueName}>
            <div className="w-full h-[50%] relative rounded-t-lg overflow-hidden ">
                <Image src={imgSrc}
                alt ='Product Picture'
                fill
                className='object-cover'
                />
            </div>
            <div className='!py-4 '>
                    <h1 className='text-3xl font-bold text-blue-500 !mb-2'>{venueName}</h1>
                    <h3 className='text-xl text-black '>{venueDes}</h3>
            </div>
            {
                onCompare? 
                <div onClick={(e)=>{
                e.stopPropagation();
                
                }}>
                <Rating data-testid = {`${venueName} Rating`} name={`${venueName} Rating`} defaultValue={0} precision={0.5} 
                    onChange={(e,value)=>{
                    e.stopPropagation();
                    e.preventDefault();
                    onCompare(venueName,value);
                    }}  
                />
                </div> : ''
            }
            
        </InteractiveCard>
    );
}
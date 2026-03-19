'use client'
import styles from './banner.module.css'
import { useRouter } from 'next/navigation'
import Image from "next/image";
import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function Banner (){
    const bannerArray = ['/img/cover.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg']
    const [index,setIndex] = useState(0)
    const router = useRouter()

    const {data:session} = useSession()
    console.log(session?.user.name)
    return (
        <div className="relative w-[80vw] h-[80vh]" onClick={()=> {setIndex(prev=>prev+1)}}>
            <Image src = {bannerArray[index%4]}
                alt = 'cover'
                fill={true}
                priority
                style={{ objectFit: "contain" ,zIndex: 1 }}
            />
            {
                session?.user?.name && (
                    <div className="absolute top-3 right-5 z-30 text-2xl text-red-500">
                        Welcome {session.user.name}
                    </div>
                )
            }
            
            <div className="relative top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-black ">
                
                <h1 className="text-center text-7xl font-bold">where every event finds its venue</h1>
                <h3 className='text-center text-3xl'>Find venues to celebrate your special moments</h3>
                
            </div>
            
                <button className="absolute bottom-5 right-5 z-30 rounded bg-green-500 shadow-white shadow-xl !py-2 !px-4
                                    hover:scale-120 cursor-pointer transition duration:300"
                                    onClick={(e)=>{
                                        e.stopPropagation();
                                        router.push('/venue')}}
                                    >
                    Select Venue
                </button>
            
        </div>

    );
}
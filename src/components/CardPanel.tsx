'use client'
import { mock } from 'node:test'
import Card from './Card'
import { useReducer, useState } from 'react'
import Link from 'next/link'
import getVenues from '@/libs/getVenues'
import {useRef , useEffect} from 'react'
import { VenueJson , VenueItem } from '../../interface'

export default function CardPanel(){
    const [venueResponse,setVenueResponse] = useState<VenueJson | null>(null)

    useEffect(()=>{
        const fetchData = async () => {
            const venues = await getVenues()
            setVenueResponse(venues)
        }
        fetchData()
    },[])
    const compareReducer = (compareList:Map<string,number>,action:{type:string,venueName:string,value:number}) => {
        const newState = new Map(compareList)
    
    switch (action.type) {

        case "set": {
            if (action.value === 0) {
                newState.delete(action.venueName)
            } else {
                newState.set(action.venueName, action.value)
            }
            return newState
        }

        case "remove": {
            newState.delete(action.venueName)
            return newState
        }

        default:
            return compareList
    }
    }
    const [compareList, dispatchCompare] = useReducer(compareReducer,new Map<string,number>([
        ["Spark Space", 0],
        ["The Grand Table", 0],
        ["The Bloom Pavilion", 0]
    ]))

    if(!venueResponse){
        return (<p>venue Panel is Loading</p>)
    }
    return (
        <div>
            <div style={{margin:"20px",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around",alignContent:"space-around"}}>
            {
                venueResponse.data.map((venueItem:VenueItem)=>(
                    <Link key = {venueItem.id} href={`/venue/${venueItem.id}`} className='w-1/5'>
                        <Card venueName={venueItem.name} imgSrc = {venueItem.picture} venueDes={venueItem.address}
                        onCompare={(venue:string,value:number)=>{
                        dispatchCompare({type:'set',venueName:venue,value:value})
                        }}
                        />  
                    </Link>
                ))
            }
            </div>
            <div className='flex justify-center  w-full text-xl text-white'>
                Compare List : {compareList.size} 
            </div>
             {Array.from(compareList.entries()).map( ([venue,value]) =><div data-testid = {`${venue}`} key={venue} className='flex justify-center w-full text-l text-white'
             onClick={()=>dispatchCompare({type:'remove',venueName:venue,value:0})}>
                {venue} : {value} </div>)}
            
        </div>
    )
}
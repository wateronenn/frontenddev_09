import CardPanel from "./CardPanel";
import Link from "next/link";
import Card from "./Card"
import type {VenueJson,VenueItem} from '../../interface'

export default async function VenueCatalog({venuesJson}:{venuesJson:Promise<VenueJson>}){
    const venueResponse = await venuesJson
    return (
        <>
        Explore {venueResponse.count} venues in ours catalog
        <div style={{margin:"20px",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around",alignContent:"space-around"}}>
            {
                venueResponse.data.map((venueItem:VenueItem)=>(
                    <Link key = {venueItem.id} href={`/venue/${venueItem.id}`} className='w-1/5'>
                        <Card venueName={venueItem.name} imgSrc = {venueItem.picture} venueDes={venueItem.address}/>  
                    </Link>
                ))
            } 
            </div>
        </>


    )
}
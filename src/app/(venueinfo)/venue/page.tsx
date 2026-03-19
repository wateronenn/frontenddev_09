import CardPanel from "@/components/CardPanel"
import getVenues from "@/libs/getVenues"
import VenueCatalog from "@/components/VenueCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
export default async function Venue(){
        const venue =  await getVenues()
    return (
        <main className="!my-10 text-center !p-5 ">
            <h1 className="text-white text-3xl font-medium !my-16"> Select your favor venue </h1>
            <Suspense fallback={<p>loading ... <LinearProgress/></p>}>
            <VenueCatalog venuesJson = {venue}/>
            </Suspense>    
        </main>
    )
}
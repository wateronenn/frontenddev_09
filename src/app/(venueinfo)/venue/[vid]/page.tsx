import { Pattaya } from "next/font/google"
import Image from "next/image"
import getVenue from "@/libs/getVenue"
export default async function venueDetailPage({params} : {params: Promise<{ vid: string }> }){
     const { vid } = await params
    const venueDetail = await getVenue(vid)
    return (
        <main className="!my-10 text-center !p-5 ">
            <h1 className="text-white text-3xl font-medium !my-16"> Venue Info ID {venueDetail.id} </h1>
            <div className="flex flex-row !p-5">
                <Image src = {venueDetail.data.picture}
                    alt = "venue Image"
                    sizes = "100vh"
                    width={0} height={0} className="rounded-lg w-[30%]"/>
                <div className="flex flex-col text-left !mx-10">
                    <div className="text-5xl font-bold text-blue-300">
                        {venueDetail.data.name}
                    </div>
                    <div className="text-xl !pt-8 font-italic">
                        Address : {" "}
                        {venueDetail.data.address} {", "}
                        {venueDetail.data.district} {", "}
                        {venueDetail.data.province} {", "}
                        {venueDetail.data.postalcode} 
                    </div>
                     <div className="text-xl !pt-8 font-italic">
                        tel : {venueDetail.data.tel}
                    </div>
                     <div className="text-xl !pt-8 font-italic">
                        Daily Rate : {venueDetail.data.dailyrate}/day
                    </div>
                    
                </div>
            </div>
        </main>
    )
}


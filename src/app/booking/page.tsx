import LocationDateReserver from "@/components/DateReserve"
import { TextField } from "@mui/material"
import UserProfile from "./@userprofile/page"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/authOptions"
export default async function Booking(){
    const session = await getServerSession(authOptions)
    var userName
    if(session){
        userName = session.user.name
    }
    console.log(session?.user.name)
    const userProfile = await UserProfile()

    return(
        <main className="w-full min-h-screen flex flex-col items-center justify-center text-black">
            <h2 className="text-2xl text-white !mt-16 mb-8">Welcome {userName}</h2>
            
            <div className="flex text-4xl font-semibold text-center text-white !mb-8">
                    Venue Bookings
                </div>
            <div>
                {userProfile}
            </div>
            <div className="bg-white w-[50%] h-[500px] rounded-xl shadow-lg space-y-6 mt-[80px] px-16 py-16">
                <div className="flex gap-6 !p-8">
                    <TextField
                        name="Name-Lastname"
                        label="Name-Lastname"
                        variant="standard"
                        fullWidth
                    />

                    <TextField
                        name="Contact-Number"
                        label="Contact-Number"
                        variant="standard"
                        fullWidth
                    />
                </div>

                <div className="flex flex-col space-y-2 !p-8">
                    <div className="font-medium text-align-center !mb-4">Booking Date and Location</div>
                    <LocationDateReserver/>
                </div>
                <div className="flex justify-center">
                    <button type="submit" name="Book Venue"className="flex rounded-lg bg-sky-600 
                    hover:bg-indigo-500 cursor-pointer hover:scale-105 !px-6 !py-2 text-white 
                    shadow-md transition items-center justify-center">
                        Book Venue
                    </button>
                </div>
                

            </div>

        </main>
    )
}
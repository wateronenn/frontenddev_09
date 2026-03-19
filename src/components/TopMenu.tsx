import Image from 'next/image'
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"
import Link from 'next/link';

export default async function TopMenu(){
    const session = await getServerSession(authOptions)

    return (
        <div className="h-[50px] bg-white fixed top-0 left-0 right-0 z-30 border-t border-b border-blue-200 flex items-center px-4">

            <div className="flex items-center">
                {
                    session ? (
                        <Link href='/api/auth/signout'>
                            <div className="px-3 py-1 text-gray-600 font-bold">
                                Sign Out ({session.user?.name})
                            </div>
                        </Link>
                    ) : (
                        <Link href='/api/auth/signin'>
                            <div className="px-3 py-1 text-gray-600 font-bold">
                                Sign In
                            </div>
                        </Link>
                    )
                }
            </div>
            <div className="flex items-center ml-auto gap-4">
                <TopMenuItem title='Booking' pageRef='/booking'/>
                <TopMenuItem title='Account' pageRef='/account'/>
                <Image 
                    src={'/img/logo.png'}
                    alt='logo'
                    width={40}
                    height={40}
                    className="h-full w-auto"
                />
            </div>

        </div>
    );
}
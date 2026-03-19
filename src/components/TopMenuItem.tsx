
import Link from 'next/link';
export default function TopMenuItem({title,pageRef} : {title:string,pageRef:string}){
    return (
        <Link href = {pageRef} className="w-[120px] text-center my-auto ml-auto font-sans text-m font-bold text-gray-600 font-bold">
            {title}
        </Link>
    );
}
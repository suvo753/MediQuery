'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const MyNavbar = ({path, children}) => {


    const pathname = usePathname();
    return (
        <div>

            <Link className={`${pathname === path ? 'text-blue-600' : ''}`} href={path}>{children} </Link>
            
        </div>
    );
};

export default MyNavbar;
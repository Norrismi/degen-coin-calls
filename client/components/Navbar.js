import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className={`flex  flex-col p-4 md:p-0  md:flex-row md:justify-end   bg-[#6e2594]`}>
            <Link href="/">
                <a className=' text-[#ef6461] hover:text-white w-fit hover:bg-[#ef6461] p-4 rounded-sm'>Calls</a>
            </Link>

            <Link href="/learn">
                <a className='hover:text-white w-fit text-[#ef6461] hover:bg-[#ef6461] p-4 rounded-sm'>Learn</a>
            </Link>

            <Link href="/join">
                <a className='hover:text-white w-fit text-[#ef6461] hover:bg-[#ef6461] p-4 rounded-sm'>Become a member</a>
            </Link>
        </nav>
    )
}

export default Navbar
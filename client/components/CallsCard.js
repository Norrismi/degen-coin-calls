import React from 'react'
import Link from 'next/link'

const CallsCard = ({ groupCalls }) => {
    return (
        <div className='grid grid-cols-4 grid-flow-row gap-2  '>
            {groupCalls && groupCalls.map(call => (

                <div key={call._id} className="max-w-sm rounded overflow-hidden  shadow-lg m-6 bg-[#171614] h-fit">
                    <div className="px-6 py-4">
                        <div className="flex justify-around font-bold text-xl mb-4 ">
                            <div className="asdf">
                                {call.coin}
                            </div>
                            {call.gains ?
                                <div className="asdf">
                                    {call.gains}
                                </div>
                                : null}
                        </div>
                    </div>

                    <div className="flex flex-col">
                        {call.notes ?
                            <span className=" mx-4 inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">

                                <a className=' text-white w-fit px-4 rounded-sm'>
                                    <div className="text-lg text-white">
                                        Notes:
                                    </div>
                                    <div className="text-white text-sm">
                                        {call.notes}
                                    </div>
                                </a>

                            </span>
                            : null}
                        {call.contract ?
                            <span className=" mx-4 inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">

                                <a className=' text-white w-fit px-4 rounded-sm'>
                                    <div className="text-lg text-[#80f4ac]">
                                        Contract:
                                    </div>
                                    <div className="font-thin text-xs">
                                        {call.contract}
                                    </div>
                                </a>

                            </span>
                            : null}
                        {call.chart ?
                            <span className=" mx-4 inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
                                <Link href={`${call.chart}`}>
                                    <a className=' text-white w-fit px-4 rounded-sm' target="_blank" rel="noopener noreferrer">
                                        {/* <div className="text-lg text-[#80f4ac]">
                                            Chart:
                                        </div> */}
                                        <div className="font-thin text-xs hover:text-[#c2e7d9] border border-green-500 w-fit p-2 rounded-lg ">
                                            {/* {call.chart} */}
                                        Chart
                                        </div>
                                    </a>
                                </Link>
                            </span>
                            : null}
                        {call.website ?
                            <span className=" mx-4 inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
                                <Link href={`${call.website}`}>
                                    <a className=' text-white w-fit px-4 rounded-sm' target="_blank" rel="noopener noreferrer">
                                        <div className="text-lg text-[#80f4ac] ">
                                            Website:
                                        </div>
                                        <div className="flex font-thin text-xs hover:text-[#c2e7d9]">
                                            {call.website}
                                        </div>
                                    </a>
                                </Link>
                            </span>
                            : null}

                        {call.telegram ?
                            <span className=" mx-4 inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
                                <Link href={`${call.telegram}`}>
                                    <a className=' text-white w-fit px-4 rounded-sm' target="_blank" rel="noopener noreferrer">
                                        <div className="text-lg text-[#80f4ac]">
                                            Telegram:
                                        </div>
                                        <div className="font-thin text-xs hover:[#ef6461] hover:text-[#c2e7d9]">
                                            {call.telegram}
                                        </div>
                                    </a>
                                </Link>
                            </span>
                            : null}
                    </div>


                </div>






            ))}
        </div>
    )
}

export default CallsCard




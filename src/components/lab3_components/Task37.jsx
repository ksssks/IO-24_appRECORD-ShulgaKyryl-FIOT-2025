import React from 'react'
import { assets } from "../../assets/assets.js";

const Task37 = () => {
    return (
        <div className="flex flex-col items-center p-4">
            <p className="text-xl font-bold">Варіант 2</p>
            <img src={assets.variant_2_lab3} alt="Варіант" className="mb-4 max-w-full h-auto" />
            <div className='border-2 border-black w-full max-w-3xl'>
                <div className="w-full bg-yellow-300 flex justify-between items-center p-2 border-b-2 border-black">
                    <div className="w-1/3 h-8 border-2 bg-white border-black"></div>
                    <p className="font-bold text-2xl">1</p>
                </div>

                <div className="flex w-full">
                    <div className="w-1/4 bg-blue-500 border-r-2 border-black flex justify-center items-center">
                        <p className="font-bold text-2xl">2</p>
                    </div>
                    <div className="flex-1 flex flex-col">
                        <div className="w-0.8 h-12 bg-red-500 border-2 border-black my-4 mx-4 flex justify-center items-center"></div>
                        <div className="flex flex-wrap">
                            <div
                                className="w-1/2 min-w-[80px] flex-1 flex flex-col h-64 items-center mx-4 my-4 border border-gray-500">
                                <p className="font-bold text-2xl">3</p>
                                <div className="w-full h-12 border-2 border-black bg-red-500 mt-auto"></div>
                            </div>

                            <div
                                className="flex-1 min-w-[80px] sm: ml-4 h-64 bg-blue-500 border-2 border-black flex justify-center items-center my-4 mr-4">
                                <p className="font-bold text-2xl">4</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-12 bg-yellow-300 border-t-2 border-black flex items-center">
                    <p className="ml-10 font-bold text-xl">5</p>
                </div>
            </div>
        </div>
    )
}

export default Task37;

import React from 'react'
import {assets} from "../../assets/assets.js";

const Task34 = () => {
    return (
        <div>
            <p>Варіант 2</p>
            <img src={assets.variant_lab3} alt="Варіант"/>
            <table className='border-2'>
                <thead className='border-2'>
                <tr>
                    <th colSpan="3" className="border-2 bg-yellow-300">
                        <div className="flex items-center justify-between p-2">
                            <div className="w-36 h-8 border-2 bg-white border-black"></div>
                            <p className="mr-12 font-bold text-2xl">1</p>
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody className='border-2'>
                <tr>
                    <td rowSpan="3" className='w-24 border-2 bg-blue-500'>
                        <p className="ml-10 mb-40 font-bold text-2xl">2</p>
                    </td>
                    <td colSpan="2">
                    <div className="w-64 h-12 bg-red-500 border-2 ml-4 mr-4 mt-4 border-black text-center"></div>
                    </td>
                </tr>
                <tr>
                    <td rowSpan="2">
                        <div className="w-32 h-64 border-2 ml-4 mt-4 mb-4 border-gray-500 text-center">
                            <p className='mt-14 font-bold text-2xl'>3</p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td rowSpan="2">
                        <div className="w-24 h-64 bg-blue-500 border-2 mt-4 mb-4 border-black text-center">
                            <p className='mt-14 font-bold text-2xl'>4</p>
                        </div>
                    </td>
                </tr>
                </tbody>
                <tfoot className='border-2'>
                <tr>
                    <td colSpan="3" className='border-2 bg-yellow-300 h-12'>
                        <p className='ml-10 font-bold text-xl'>5</p>
                    </td>
                </tr>
                </tfoot>
            </table>
        </div>
    )
}
export default Task34

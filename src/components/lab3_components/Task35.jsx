import React from 'react'
import {assets} from "../../assets/assets.js";

const Task35 = () => {
    return (
        <div>
                <p className="text-lg font-semibold mb-2">Варіант 2</p>
                <img src={assets.variant_lab3} alt="Варіант"/>

                <table className="w-full border-2 border-black">
                    <thead className="border-2">
                    <tr>
                        <th colSpan="3" className="border-2 bg-yellow-300 p-2">
                            <div className="flex items-center justify-between w-full">
                                <div className="w-1/4 h-8 border-2 bg-white border-black"></div>
                                <p className="font-bold text-2xl">1</p>
                            </div>
                        </th>
                    </tr>
                    </thead>

                    <tbody className="border-2">
                    <tr>
                        <td rowSpan="3" className="w-1/5 border-2 bg-blue-500">
                            <p className="text-center font-bold text-2xl py-10">2</p>
                        </td>
                        <td colSpan="2" className="p-2">
                            <div className="w-full h-12 bg-red-500 border-2 border-black"></div>
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan="2" className="p-2">
                            <div className="h-64 border-2 border-gray-500 flex items-center justify-center">
                                <p className="font-bold text-2xl">3</p>
                            </div>
                        </td>
                        <td rowSpan="2" className="p-2">
                            <div className="h-64 bg-blue-500 border-2 border-black flex items-center justify-center">
                                <p className="font-bold text-2xl">4</p>
                            </div>
                        </td>
                    </tr>
                    </tbody>

                    <tfoot className="border-2">
                    <tr>
                        <td colSpan="3" className="border-2 bg-yellow-300 h-12 text-left px-4">
                            <p className="font-bold text-xl">5</p>
                        </td>
                    </tr>
                    </tfoot>
                </table>
        </div>
    )
}
export default Task35

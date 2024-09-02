import React from 'react'
import { dioList } from '../data/patients'

const DiagnosisList = () => {
  return (
    <div className='w-full py-6 px-4 bg-white rounded-xl' >
        <h2 className='text-2xl font-bold mb-8' >
            Diagnostic List
        </h2>

        <section>
            <table className='w-full flex flex-col' >
                <tr className='text-sm font-bold px-3 text-left flex flex-row 
                 bg-[#F6F7F8] rounded-full py-3 gap-4' >
                    <th className='flex-1'>Problem/Diagnosis</th>
                    <th className='flex-1'>Description</th>
                    <th className='flex-1'>Status</th>
                </tr>


                <tbody className='flex flex-col px-3 w-full gap-3 mt-6' > 
                    {dioList.map((z, idx) => (
                        <tr 
                        key={idx} 
                        className='text-sm font-normal flex flex-1 border-b
                        pb-3 gap-4 border-[#F6F7F8]'
                        >
                            <td className='flex-1'>{z.problem}</td>
                            <td className='flex-1'>{z.Description}</td>
                            <td className='flex-1'>{z.Status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    </div>
  )
}

export default DiagnosisList
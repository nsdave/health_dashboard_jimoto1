import React from 'react'
import { Download } from '../assets/icons'
import { labResults } from '../data/patients'

const LabResults = () => {

    function ResultCard ({text}) {
        return (
            <div className='w-full flex flex-row justify-between
            px-4 py-3 rounded-md hover:bg-[#F6F7F8] duration-200
            ease-in-out cursor-pointer' >
                <p className='font-normal text-sm' >{text}</p>
                <img 
                src={Download}
                alt='download'
                className='w-[20px] h-[20px]'
                />
            </div>
        )
    }

  return (
    <div className='bg-white px-3 py-6 rounded-xl' >
        <h2 className='font-bold text-2xl mb-5 mx-1' >
            LabResults
        </h2>
        <div className='flex flex-col gap-2 h-[34vh]
        overflow-y-scroll' >
            {labResults.map((z,idx) => (
                <ResultCard 
                key={idx}
                text={z}
                />
            ))}
        </div>
    </div>
  )
}

export default LabResults
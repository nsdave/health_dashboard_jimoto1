import React from 'react'
import { Search, MoreHorizontal } from '../assets/icons'

const PatientsList = ({ patData }) => {
    
    function PatientPreview ({ name, img, gen, age }) {
        return (
            <div className='flex flex-row items-center w-full justify-between
            cursor-pointer px-5 py-3 hover:bg-[#D8FCF7]' >
                <div className='flex flex-row gap-4' >
                    <img 
                    src={img}
                    alt="profile picture"
                    className='w-[48px] h-[48px]'
                    />
                    <div>
                        <p className='font-bold text-sm' >
                            {name}
                        </p>
                        <div className='flex flex-row items-center
                        font-light text-sm gap-1' >
                            <p>{gen}.</p>
                            <p>{age}</p>
                        </div>
                    </div>
                </div>

                <img 
                src={MoreHorizontal}
                alt='options'
                className='w-[18px] h-[4px]'
                />
            </div>
        )
    }

  return (
    <div className='w-[23vw] max-h-[95vh] bg-white rounded-xl py-6
    overflow-hidden pr-1' >
        <div className='w-full flex flex-row justify-between items-center px-5' >
            <h4 className='text-2xl font-bold' >
                Patients
            </h4>
            <img
            src={Search}
            alt='search' 
            className='w-[18px] h-[18px]'
            />
        </div>

        <div className='mt-8 flex flex-col gap-1 h-full pb-16 
        overflow-y-scroll pr-1' >
            {patData?.map((z, idx) => (
                <PatientPreview 
                key={idx}
                img={z.profile_picture}
                age={z.age}
                gen={z.gender}
                name={z.name}
                />
            ))}
        </div>
    </div>
  )
}

export default PatientsList
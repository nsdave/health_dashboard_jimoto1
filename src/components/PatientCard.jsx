import React from 'react'
import { BirthIcon, FemaleIcon, PhoneIcon, Insurance } from '../assets/icons'

const PatientCard = ({ data }) => {

    function CardDetails ({ img, title, userdata }) {
        return (
            <div className='flex flex-row items-center gap-3' >
                <div className='w-[42px] h-[42px]bg-[#F6F7F8]
                flex items-center justify-center' >
                    <img 
                    src={img}
                    alt=''
                    className='w-[42px] h-[42px]'
                    />
                </div>

                <div className='text-sm' >
                    <p className='font-medium' >{title}</p>
                    <p className='font-bold' >{userdata}</p>
                </div>
            </div>
        )
    }
 
  return (
    <div className='flex flex-col bg-white rounded-xl
    py-8 px-4 w-full' >
        <section className='flex flex-col items-center' >
            <img
            src={data?.profile_picture}
            alt='profile_picture'
            className='w-[160px] h-[160px]' 
            />
            <h2 className='text-2xl font-bold mt-6 mb-8' >
                {data?.name}
            </h2>
        </section>

        <section className='flex flex-col gap-6' >
            <CardDetails 
            img={BirthIcon}
            title={"Date Of Birth"}
            userdata={data?.date_of_birth}
            />
            <CardDetails 
            img={FemaleIcon}
            title={"Gender"}
            userdata={data?.gender}
            />
            <CardDetails 
            img={PhoneIcon}
            title={"Contact Info"}
            userdata={data?.phone_number}
            />
            <CardDetails 
            img={PhoneIcon}
            title={"Emergency Contacts"}
            userdata={data?.emergency_contact}
            />
            <CardDetails 
            img={Insurance}
            title={"Insurance Provider"}
            userdata={data?.insurance_type}
            />
        </section>

        <button className='bg-[#01F0D0] text-sm font-bold
        w-[80%] self-center mt-10 py-3 px-4 rounded-full' >
            Show All Information
        </button>
    </div>
  )
}

export default PatientCard
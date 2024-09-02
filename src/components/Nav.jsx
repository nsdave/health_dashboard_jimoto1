import React from 'react'
import { 
    TestLogo, Home, 
    CreditCard, BirthIcon, 
    ChatBubble, Group,
    Settings, MoreVertical
 } from '../assets/icons'

const NavData = [
    {
        icon: Home,
        name: "Overview",
    },
    {
        icon: Group,
        name: "Patients",
    },
    {
        icon: BirthIcon,
        name: "Schedule",
    },
    {
        icon: ChatBubble,
        name: "Message",
    },
    {
        icon: CreditCard,
        name: "Transactions",
    },
]

const Nav = () => {

    function NavOptions ({ imgSource, alt, name }) {
        return (
            <div className='flex flex-row gap-2 rounded-full
            cursor-pointer hover:bg-[#01F0D0] px-3 py-3 
            items-center duration-200 ease-in-out'>
                <img 
                src={imgSource}
                alt={alt}
                className='w-[22px] h-[17px]'
                />
                <p className='text-sm font-bold' >
                    {name}
                </p>
            </div>
        )
    }

  return (
    <div 
    className='flex flex-row w-full bg-white rounded-full py-2
    shadow-sm px-4 items-center justify-between' >
        <img 
        src={TestLogo}
        alt='Test logo'
        className='h-12'
        />

        <section className='flex flex-row gap-2' >
            {NavData.map((z) => (
                <NavOptions 
                key={z.name}
                alt={z.name}
                imgSource={z.icon}
                name={z.name}
                />
            ))}
        </section>

        <section className='flex flex-row items-center' >
            <div className='flex flex-row px-4 gap-2 cursor-pointer' >
                <img 
                src="/senior-woman-doctor.png"
                className='w-[44px] h-[44px]'
                />
                <div className='text-sm' >
                    <p className='font-bold' >Dr. Jose Simmons</p>
                    <p className='font-light' >General Practitioner</p>
                </div>
            </div>
            
            <div className='border-l border-[#EDEDED] gap-4
            flex flex-row px-4' >
                <img
                src={Settings} 
                alt='settings'
                className='w-[19px] h-[20px] cursor-pointer'
                />
                <img
                src={MoreVertical}
                alt='options'
                className='w-[4px] h-[18px] cursor-pointer'
                />
            </div>
        </section>
    </div>
  )
}

export default Nav
import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import { lastMonths } from '../data/patients'
import { 
    ArrowUp, ArrowDown, 
    ExpandMore, HeartBPM,
    RespiratoryRate, Temperature
} from '../assets/icons'

const DiagnosisHistory = ({ data }) => {

    const chartData = data?.diagnosis_history.slice(0,6)
    .reverse()
    .map((po) => po.blood_pressure)

    function Details ({ title, indi, num, arrow, seltxt }) {
        return (
            <div className='flex flex-col gap-1' >
                <span className='flex flex-row items-center gap-2' >
                    <div 
                    className="w-[14px] h-[14px] rounded-full" 
                    style={{ backgroundColor: indi }} 
                    />
                    <p className='font-bold text-sm' >
                        {title}
                    </p>
                </span>

                <h3 className='font-bold text-[22px]' >
                    {num}
                </h3>

                <span className='flex flex-row items-center w-full gap-2' >
                    <img 
                    src={arrow}
                    alt='select'
                    className='w-[10px] h-[5px]'
                    />

                    <p className='font-light text-sm' >
                        {seltxt}
                    </p>
                </span>
            </div>
        )
    }

    function Card ({ arrow, ftxt, stxt, txt, img, bg }) {
        return (
            <div 
            className='p-4 rounded-xl flex-1' 
            style={{ backgroundColor: bg }}
            >
                <img 
                src={img}
                alt=''
                className='w-[96px] h-[96px]'
                />
                <p className='text-base font-light mt-3' >
                    {ftxt}
                </p>
                <h2 className='font-bold text-3xl' >
                    {stxt}
                </h2>

                <span className='flex flex-row items-center mt-4 gap-2' >
                    {
                        arrow && 
                        <img 
                        src={ArrowDown}
                        alt='arrow'
                        className='w-[10px] h-[5px]'
                        />
                    }
                    <p className='font-light text-sm' >
                       {txt} 
                    </p>
                </span>
            </div>
        )
    }

  return (
    <div className='flex flex-col w-full bg-white py-6 px-4 rounded-xl' >

        <h2 className=' text-2xl font-bold mb-9' >
            Diagnosis History
        </h2>

        <section className='w-full bg-[#F4F0FE] flex flex-row
        items-center p-4 rounded-xl' >
            <div className='w-[70%]' >
                <div className='flex flex-row items-center justify-between
                w-full mb-2' >
                    <h2 className=' font-bold text-lg' >
                        Blood Pressure
                    </h2>

                    <span className='flex flex-row gap-3 items-center' >
                        <p className=' font-light text-sm' >
                            Last 6 months
                        </p>
                        <img 
                        src={ExpandMore}
                        alt='expand'
                        className='w-[11px] h-[6px]'
                        />
                    </span>
                </div>
                <Line
                data={{
                    labels: lastMonths?.map((po) => po),
                    datasets: [
                        {
                            data: chartData?.map(po => po.systolic.value),
                            tension: 0.5,
                            backgroundColor: "#E66FD2",
                            borderColor: "#C26EB4",
                            borderWidth: 2,
                            label: "",
                        },
                        {
                            data: chartData?.map(po => po.diastolic.value),
                            tension: 0.5,
                            backgroundColor: "#8C6FE6",
                            borderColor: "#7E6CAB",
                            borderWidth: 2,
                            label: "",
                        }
                    ]
                }}
                />
            </div>

            <div className='flex flex-col ml-4 w-[30%] gap-4' >
                <Details 
                title={"Systolic"}
                indi={"#E66FD2"}
                num={"160"}
                seltxt={"Higher than Average"}
                arrow={ArrowUp}
                />
                <div className='w-full h-[1px] bg-[#CBC8D4]' />
                <Details 
                title={"Diastolic"}
                indi={"#8C6FE6"}
                num={"78"}
                seltxt={"Lower than Average"}
                arrow={ArrowDown}
                />
            </div>
        </section>

        <section className='flex flex-row justify-between mt-6 gap-4' >
            <Card 
            img={RespiratoryRate}
            bg={"#E0F3FA"}
            ftxt={"Respiratory Rate"}
            stxt={"20 bpm"}
            txt={"Normal"}
            />
            <Card 
            img={Temperature}
            bg={"#FFE6E9"}
            ftxt={"Temperature"}
            stxt={"98.6°F"}
            txt={"Normal"}
            />
            <Card 
            img={HeartBPM}
            bg={"#FFE6F1"}
            ftxt={"Heart Rate"}
            stxt={"78 bpm"}
            txt={"Lower than Average"}
            arrow
            />
        </section>
    </div>
  )
}

export default DiagnosisHistory
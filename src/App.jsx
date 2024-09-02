import './App.css'
import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import PatientCard from './components/PatientCard'
import PatientsList from './components/PatientsList'
import DiagnosisHistory from './components/DiagnosisHistory'
import axios from 'axios'
import DiagnosisList from './components/DiagnosisList'
import LabResults from './components/LabResults'

function App() {
  const [rawData, setRawData] = useState(null)
  const [data, setData] = useState(null)

  const searchName = "Jessica Taylor"

  useEffect(() => {
    try {
        axios.get('https://fedskillstest.coalitiontechnologies.workers.dev', {
            auth: {
                username: "coalition",
                password: "skills-test"
            }
        }).then((res) => {
            const raw = res.data
            const filtered = raw.find((po) => po.name == searchName)

            setRawData(raw)
            setData(filtered)
        })
    } catch (error) {
        console.log(error)
    }
},[])

  return (
    <div className='p-4' >
      <Nav />
      <div className='mt-8 flex flex-row justify-between' >
        <PatientsList patData={rawData} />

        <div className='w-[48vw] gap-6 flex flex-col'>
          <DiagnosisHistory data={data} />
          <DiagnosisList />
        </div>

        <div className='w-[23vw] flex flex-col gap-6'>
          <PatientCard data={data} />
          <LabResults />
        </div>
        
      </div>
    </div>
  )
}

export default App

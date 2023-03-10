import React, { useEffect } from 'react'
import { useAppContext } from '../../constext/appContext'
import {StatsContainer,Loading,ChartContainer} from '../../components'

const Stats = () => {

  const {showStats,isLoading,monthlyApplications} = useAppContext()

  useEffect(() => {
   showStats()
   // eslint-disable-next-line
  },[])
  
  if(isLoading){
    return <Loading center/>
  }

  return (
    <>
    <StatsContainer/>
    {monthlyApplications.length > 0 && <ChartContainer/> }
    
    </>
  )
}

export default Stats
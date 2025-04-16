import React, { useEffect } from 'react'
import { useallActiveEmployees, usedomain, useInfograph } from '../Store'
import { getAllData } from '../Data/Repo/dataRepo'

export default function Employeeloader() {
     const {domain} =usedomain()
     const {setInfograph} =useInfograph()
        const {setallEmployees} =useallActiveEmployees()
          useEffect(()=>{
                getAllData.get_all_employess(domain).then((res)=>{
                    setallEmployees(res)
                   
                })
              
            },[])
            useEffect(()=>{
                getAllData.get_allmainpage_infograph(domain).then((res)=>{
                    setInfograph(res)
                    console.log(res)
                })
            },[])

  return (
    null
  )
}

import React, { useEffect } from 'react'
import { useallActiveEmployees, usedomain, useImportantlink, useInfograph, useNews } from '../Store'
import { getAllData } from '../Data/Repo/dataRepo'

export default function Employeeloader() {
     const {domain} =usedomain()
     const {setInfograph} =useInfograph()
     const {setImportantlink}=useImportantlink()
        const {setallEmployees} =useallActiveEmployees()
        const{setInews}=useNews()
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
            useEffect(()=>{
              getAllData.get_allimportant_link(domain).then((res)=>{
                  setImportantlink(res)
                  console.log(res)
                })
              })
              useEffect(()=>{
                getAllData.get_allimportant_link(domain).then((res)=>{
                    setImportantlink(res)
                    console.log(res)
                  })
                })
                useEffect(()=>{
                  getAllData.get_allnews(domain).then((res)=>{
                    setInews(res)
                      console.log(res)
                    })
                  })

  return (
    null
  )
}

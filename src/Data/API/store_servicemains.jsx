import axios from "axios"

export const store_servicemains=async(domain)=>{
    let final=[]
    await axios.get(`${domain}/api/ServiceMain/GetAllServiceMains`).then((res)=>{
      final=res.data
    }).catch((err)=>console.log(err))
    return final

}
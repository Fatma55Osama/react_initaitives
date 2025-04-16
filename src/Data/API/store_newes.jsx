import axios from "axios"

export const store_newes=async(domain)=>{
    let final =[]
    await axios.get(`${domain}/api/News/GetAllNews`,{
        params:{
            isActive:1,
            onMainPage:1
        }
    }).then((res)=>{
        final=res.data
    }).catch((err)=>{
       console.log(err)
    })
    return final
}
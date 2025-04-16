import axios from "axios"

export const store_employess=async(domain)=>{
    let final =[]
    await axios.get(`${domain}/api/ActiveEmployee/GetAllActiveEmployees`, {
        params: {
            onMainPage: 1,
            isActive: 1
        }
    }).then((res)=>{
        final=res.data
        console.log(final)

    }).catch((err)=>{console.log(err)})
    return final
}
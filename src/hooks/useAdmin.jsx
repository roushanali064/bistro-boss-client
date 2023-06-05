import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const {user} = useContext(AuthContext);
    
    const {data: isAdmin, isLoading: isAdminLoading}=useQuery({
        queryKey:['isAdmin',user?.email],
        queryFn: async()=>{
            const res= await fetch(`https://bistro-boss-server-phi.vercel.app/user/admin/${user?.email}`)
            const result = res.json()
            console.log(result)
            return result
        }
    })
    return [isAdmin, isAdminLoading]
}

export default useAdmin
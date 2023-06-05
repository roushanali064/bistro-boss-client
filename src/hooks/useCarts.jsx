import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useCarts = () => {
    const {user}=useContext(AuthContext)
    const token = localStorage.getItem('access-token');
    // const axios = useAxiosSecure()

    const { refetch, data: carts=[]} = useQuery({
        queryKey: ['carts',user?.email],
         queryFn: async()=>{
             const res= await fetch(` https://bistro-boss-server-phi.vercel.app/carts?email=${user?.email}`,{
                 headers:{
                     authorization: `bearer ${token}`
                 }
             })
             return res.json()
         },

        // queryFn: async()=>{
        //     const res= await axios(`/carts?email=${user?.email}`)
        //     console.log('res from axios',res)
        //     return res.data;
        // },
      })
      return [carts, refetch]
};

export default useCarts;
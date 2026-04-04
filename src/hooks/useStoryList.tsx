import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useStoryList= ()=>{
    return useQuery({
        queryKey:["stories"],
        queryFn: async ()=>{
            const res=await axios.get(`http://localhost:3000/stories`)
                return res.data;
            
        }
    })
}
export const useDelete=()=>{
    const queryClient=useQueryClient()
    return useMutation ({
        mutationFn: async (id:number)=>{
            await axios.delete(`http://localhost:3000/stories/${id}`)
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['stories']})
        }
    })
}
"use client";
import {useRouter} from "next/navigation";
export default function Deleteblock({id}){
    const router = useRouter();
    const deleteItem = async() =>{
        const res = await fetch(`https://localhost:3000/api/Pantry/${id}`,{
            method: 'DELETE',
        })
        if(res.ok){
            router.refresh();
        }
    }
    return(
        <div>
            <h1 onClick={deleteItem}>Delete</h1>
        </div>
    )
}
"use client";
import {useRouter} from "next/navigation";
export default function Deleteblock({id}){
    const router = useRouter();
    const deleteItem = async() =>{
        const res = await fetch(`http://localhost:3000/api/Pantry/${id}`,{
            method: 'DELETE',
        })
        if(res.ok){
            router.refresh();
        }
    }
    return(
        <div>
            <button className="bg-slate-500 py-1 px-2 rounded-sm" onClick={deleteItem}>Delete</button>
        </div>
    )
}


"use client";
import React, {useState} from "react";
import { useRouter } from "next/navigation";
export default function ItemsForm() {
    const router = useRouter();
    const startpantry = {
        title: "",
        description: "",
        quantity: "",
        freshness: 0
    }
    const [pantry, setPantry] = useState(startpantry);
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPantry((prepantry) =>({
            ...prepantry,
            [name]: value
        }));
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        const res = await fetch("/api/Pantry",{
            method: "POST",
            body: JSON.stringify({pantry}),
            "content-type": "application/json",
            
        });
        if(!res.ok){
            throw new Error("Failed to create ticket.");
         }
         router.refresh();
         router.push("/");
    }
    return(
        <div className="flex justify-center mt-8 text-white">
            <form className="flex flex-col gap-3 w-1/3 bg-slate-700 p-7 mt-5" method="post" onSubmit={handleSubmit}>
                <label>Item Title</label>
                <input 
                    id="title" 
                    name="title" 
                    value={pantry.title} 
                    required={true}
                    type="text"
                    onChange={handleChange}
                />
                <label>Item Description</label>
                <textarea
                    rows={3}
                    id="description"
                    name="description"
                    type="text"
                    required={true}
                    value={pantry.description}
                    onChange={handleChange} 
                />
                <label>Quantity</label>
                <input
                    id="quantity"
                    type="number"
                    name="quantity"
                    required={true}
                    value={pantry.quantity}
                    onChange={handleChange} 
                />
                <label>Freshness</label>
                <input 
                    type="range" 
                    id="freshness" 
                    name="freshness" 
                    min="0" max="100" 
                    value={pantry.freshness} 
                    onChange={handleChange} 
                />
                <input type="submit" className="bg-blue-500 mt-2" value="Add to pantry" />
            </form>
        </div>
    )
}
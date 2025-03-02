import Freshness from "./Freshness"
import Deleteblock from "./Deleteblock"
export default function Item({pantry}) {
    return(
        <div className="flex flex-col bg-slate-900 hover:bg-slate-700 text-white m-3 p-3 rounded-sm">
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold">{pantry.title}</h1>
                <Deleteblock id={pantry._id}/>
            </div>
            
            <h2>{pantry.description}</h2>
            <div className="flex items-center">
                <h2>Quantity: </h2>
                <h2 className="pl-1">{pantry.quantity}</h2>
            </div>
            <h2 className="mb-1">Freshness: </h2>
            <Freshness fresh={pantry.freshness}/>
        </div>
    )
}
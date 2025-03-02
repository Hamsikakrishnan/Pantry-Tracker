import Freshness from "./Freshness"
export default function Item() {
    return(
        <div className="flex flex-col bg-slate-900 hover:bg-slate-800 text-white m-3 p-3 rounded-sm">
            <h1>Title</h1>
            <h2>Description</h2>
            <div className="flex items-center">
                <h2>Quantity: </h2>
                <h2 className="pl-1">3</h2>
            </div>
            <h2 className="mb-1">Freshness: </h2>
            <Freshness />
        </div>
    )
}
import Link from "next/link"
export default function Nav() {
    return(
        <div className="bg-slate-900">
            <div className="flex items-center justify-between bg-slate-900 p-5">
                <Link href="/" 
                className="text-gray-100 text-2xl font-bold">
                    Pantry
                </Link>
                <Link href="/ItemsList/new" 
                className="text-black text-lg px-5 py-2 bg-purple-200 font-bold rounded-sm">
                    Add Item to Pantry
                </Link>
            </div>
        </div>
    )
}
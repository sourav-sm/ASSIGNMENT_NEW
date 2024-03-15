import Link from "next/link"
export default function Navbar(){
    return(
        <div className="flex gap-20 justify-center my-20">
            <Link className="border-2 border-gray-400 px-4 py-2 rounded" href="/">Home</Link>
            <Link className="border-2 border-gray-400 px-4 py-2 rounded" href="/static-page">Server</Link>
            <Link className="border-2 border-gray-400 px-4 py-2 rounded" href="/interactive-page">Client</Link>
        </div>
    )
}
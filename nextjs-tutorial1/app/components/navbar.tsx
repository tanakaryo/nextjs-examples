import Link from "next/link";

export default function NavigationBar() {
    return (
        <nav>
            <Link href="/about" className=" flex justify-center bg-amber-950 text-white hover:bg-fuchsia-200">About</Link>
            <Link href="/api-routes-user" className="flex justify-center bg-amber-300 text-white hover:bg-blue-500">API-USER</Link>
        </nav>
    );
}
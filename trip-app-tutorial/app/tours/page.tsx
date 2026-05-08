import Link from "next/link";
import {tours} from "@/app/lib/tours";


export default function TourPage() {
    return (
        <main style={{padding: 16, maxWidth: 520, margin: "24px auto"}}>
            <h1 style={{margin: "0 0 12px"}}>Tours</h1>
            <ul style={{listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10}}>
                {tours.map((t) => (
                    <li key={t.id} style={{border: "1px solid #eaeaea", borderRadius: 12, padding: 12}}>
                        <Link href={`/tours/${t.id}`} style={{fontWeight: 700, textDecoration: "none", color: "#111"}}>{t.title}</Link>
                        <div style={{color: "#555", fontSize: 14, marginTop: 4}}>{t.days} days / ¥{t.price}</div>
                    </li>
                ))}
            </ul>
        </main>
    )
}
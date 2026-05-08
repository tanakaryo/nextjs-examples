import Link from "next/link";
import {tours} from "@/app/lib/tours";

type Props = {
    params: {id: string};
}

export default async function TourDetail({params}: Props) {
    const { id } = await params;
    const tour = tours.find(t => t.id === id);
    if (!tour) return <main style={{ padding: 16}}>Not Found</main>;

    return (
        <main style={{padding: 16, maxWidth: 520, margin: "24px auto"}}>
            <h1 style={{margin: "0 0 12px"}}>{tour.title}</h1>
            <p style={{margin: "0 0 12px", color: "#333", lineHeight: 1.6}}>{tour.detail}</p>
            <p style={{margin: 0, color: "#555"}}>{tour.days} days / ¥{tour.price}</p>
            <div style={{marginTop: 16}}>
                <Link href={"/tours"} style={{textDecoration: "none", color: "#2563eb"}}>Back to previous page</Link>
            </div>
        </main>
    );
}
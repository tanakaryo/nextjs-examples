import Link from "next/link";

export default function Home() {
  return (
    <main style={{padding: 16, maxWidth: 420, margin: "40px auto"}}>
      <h1 style={{fontSize: 36, marginBottom: 12}}>Trip App Demo</h1>
      <button style={{backgroundColor: "#2563eb", color: "#fff", border: 0, borderRadius: 12, padding: "12px 16px", width: "100%"}}>
        <Link href={"/tours"} style={{color: "inherit", textDecoration: "none", display: "block"}}>View Tours</Link>
      </button>
    </main>
  );
}
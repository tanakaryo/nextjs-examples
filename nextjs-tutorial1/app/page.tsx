import Main from "@/app/components/main";
import Header from "@/app/components/headers";
import Footer from "@/app/components/footer";
import NavigationBar from "@/app/components/navbar";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
};

export default async function Home() {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();

  return (
    <>
     <NavigationBar />
     <Header />
     <Main />
     <Footer />
     <Link href="/info">go to info.</Link>
    </>
  );
}


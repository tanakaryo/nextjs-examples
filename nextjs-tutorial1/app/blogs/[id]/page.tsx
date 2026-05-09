export default async function BlogPage({
    params,
}:{
    params: Promise<{id: string}>;
}) {
    const id = (await params).id;
    return <h1>Blog ID: {id}</h1>;
}
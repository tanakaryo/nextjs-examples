export default async function SlowComponent() {
    await new Promise((resolve) =>{
        setTimeout(resolve, 3000);
    });

    return <div>Heavy Processing.</div>
}
async function getMessageApi(): Promise<string> {
  const res = await fetch("http://localhost:3000/api/helloWorld",{
    cache: 'no-store', 
  })
  const data = await res.json();
  return data.message;
}

export default function Home() {
  const message = getMessageApi();
  return (
    <main>
      <h1>{message}</h1>
    </main>
  );
}

async function getMessageFromApi(): Promise<string> {
  const res = await fetch('http://localhost:3000/api/hello', {
    cache: 'no-store',
  })
  const data = await res.json()
  return data.message
}

export default async function Home() {
  const message = await getMessageFromApi();

  return (
    <main>
      <p>
        <strong>{message}</strong>
      </p>
    </main>
  );
}

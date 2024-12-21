import Link from "next/link";
export default async function Home() {
  const url = await fetch("https://jsonplaceholder.typicode.com/todos");
  const response = await url.json();
  return (
    <main>
      {response.map((todos: any, index: any) => (
        <div className="text-2xl">
          <Link href={`${todos.id}`}>
            <h1>
              &nbsp; &nbsp;<li key={index}> {todos.id}</li>
            </h1>
          </Link>
        </div>
      ))}
    </main>
  );
}

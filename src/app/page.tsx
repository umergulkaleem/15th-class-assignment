import Link from "next/link";
export default async function Home() {
  const url = await fetch("https://jsonplaceholder.typicode.com/todos");
  const response = await url.json();
  // console.log(response);
  return (
    <main>
      {response.map((todos: any) => (
        <div className="text-2xl">
          <Link href={`${todos.id}`}>
            <h1>&nbsp; &nbsp; {todos.id}</h1>
          </Link>
        </div>
      ))}
    </main>
  );
}

import Link from "next/link";
import React from "react";

const page = async (props: any) => {
  console.log(props);
  const url = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${props.params.id}`
  );
  const url1 = await fetch(
    `https://jsonplaceholder.typicode.com/users/${props.params.id}`
  );
  const response = await url.json();
  const response1 = await url1.json();
  //   console.log("completed", response.completed);
  return (
    <div>
      todos
      {response.userId} <br />
      {response.title} <br />
      users <br />
      <Link href={`${response1.name}`}>{response1.name}</Link>
      <Link href="/">
        <div className="text-2xl">Home</div>
      </Link>
    </div>
  );
};

export default page;

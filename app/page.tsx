'use server'

type item = {
  id: number;
  title: string;
};

export default async function Home() {
  const data: any[] = await (await fetch("https://jsonplaceholder.typicode.com/todos")).json();

  return (
    <>
      <h1 className="text-white text-3xl text-center font-semibold m-3">React Server Components</h1>
      <h2 className="text-white text-3xl text-center font-semibold m-3">React Server Components(RSC) render on the server and allow the user to use new Data fetching techniques.</h2>

      <ol className="m-3 bg-slate-300 p-11 rounded-3xl text-slate-700 font-bold">
        { data.map((item: item) => (
          <li key={item.id}>{item.id}. {item.title}</li>
        )) }
      </ol>
    </>
  );
};
import { unstable_noStore } from "next/cache";
import { Suspense } from "react";

const ExampleStreamedContent = async () => {
  unstable_noStore();

  await new Promise((res) => setTimeout(res, 500));

  return <span>Your random number: {Math.random()}</span>;
};

const Home = () => {
  return (
    <>
      <h1>Hello world</h1>
      <p className="flex flex-col gap-4 py-6">
        <Suspense
          fallback={<span>Waiting, here goes your random number...</span>}
        >
          <ExampleStreamedContent />
        </Suspense>
        <img
          className="bg-sky-900"
          src="https://picsum.photos/200/300"
          alt=""
          width={200}
          height={300}
        />
        <img
          className="bg-sky-900"
          src="https://picsum.photos/220/300"
          alt=""
          width={220}
          height={300}
        />
        <img
          className="bg-sky-900"
          src="https://picsum.photos/230/300"
          alt=""
          width={230}
          height={300}
        />
        <img
          className="bg-sky-900"
          src="https://picsum.photos/240/300"
          alt=""
          width={240}
          height={300}
        />
      </p>
    </>
  );
};

export default Home;

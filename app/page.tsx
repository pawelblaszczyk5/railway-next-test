import { unstable_noStore } from "next/cache";
import Image from "next/image";
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
        <Image
          className="bg-sky-900"
          src="/693-200x300.jpg"
          alt=""
          width={200}
          height={300}
        />
        <Image
          className="bg-sky-900"
          src="/1038-220x300.jpg"
          alt=""
          width={220}
          height={300}
        />
        <Image
          className="bg-sky-900"
          src="/1002-230x300.jpg"
          alt=""
          width={230}
          height={300}
        />
        <Image
          className="bg-sky-900"
          src="/1077-240x300.jpg"
          alt=""
          width={240}
          height={300}
        />
      </p>
    </>
  );
};

export default Home;

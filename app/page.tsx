import { unstable_cache, unstable_noStore } from "next/cache";
import Image from "next/image";
import { Suspense } from "react";

import first from "#/app/_assets/693-200x300.jpg";
import second from "#/app/_assets/1038-220x300.jpg";
import third from "#/app/_assets/1002-230x300.jpg";
import fourth from "#/app/_assets/1077-240x300.jpg";

const getRandomNumber = unstable_cache(
  async () => Math.random(),
  ["random-number"],
  {
    revalidate: Infinity,
    tags: ["random-number"],
  }
);

const ExampleStreamedContent = async ({
  useCache = false,
}: {
  useCache?: boolean;
}) => {
  unstable_noStore();

  await new Promise((res) => setTimeout(res, 500));

  return (
    <span>
      Your random number: {useCache ? getRandomNumber() : Math.random()}
    </span>
  );
};

const Home = () => {
  return (
    <>
      <h1>Hello world</h1>
      <p className="flex flex-col gap-4 py-6">
        <Suspense
          fallback={
            <span>Waiting, here goes your random (cached) number...</span>
          }
        >
          <ExampleStreamedContent useCache />
        </Suspense>
        <Suspense
          fallback={
            <span>Waiting, here goes your random (uncached) number...</span>
          }
        >
          <ExampleStreamedContent />
        </Suspense>
        <Image loading="eager" src={first} alt="" />
        <Image loading="eager" src={second} alt="" />
        <Image loading="eager" src={third} alt="" />
        <Image loading="eager" src={fourth} alt="" />
      </p>
    </>
  );
};

export default Home;

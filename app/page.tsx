import { unstable_noStore } from "next/cache";
import { Suspense } from "react";

const ExampleStreamedContent = async () => {
  unstable_noStore();

  await new Promise((res) => setTimeout(res, 1500));

  return (
    <>
      <span>{Math.random()}</span>
      <img src="https://picsum.photos/200/300" width={200} height={300} />
      <img src="https://picsum.photos/220/300" width={220} height={300} />
      <img src="https://picsum.photos/230/300" width={230} height={300} />
      <img src="https://picsum.photos/240/300" width={240} height={300} />
    </>
  );
};

const Home = () => {
  return (
    <>
      <h1>Hello world</h1>
      <p className="flex flex-col gap-4 py-6">
        <Suspense fallback={<span>Waiting...</span>}>
          <ExampleStreamedContent />
        </Suspense>
      </p>
      {/* This lorem ipsum is just to force Safari to show initial chunk of content */}
      <span className="opacity-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        numquam distinctio accusantium voluptates optio, reprehenderit
        cupiditate ratione iste beatae dolores, vel vero a. Repellendus tempora
        suscipit ea nemo voluptate mollitia. Blanditiis explicabo exercitationem
        quia nulla iure omnis illum, tempora fuga quis vel. Officia maxime
        voluptates repellat, repudiandae atque quia sit. Et iure autem libero
        quae aliquid alias vero modi vitae. Cum, iusto! Dolor quis animi ut
        vitae, officia voluptatibus optio? Perspiciatis, est eligendi,
        blanditiis commodi quos aperiam, amet veniam praesentium autem repellat
        possimus exercitationem maxime ducimus. Ipsum quae facere neque? Nostrum
        rem beatae vero magnam earum repudiandae sequi in architecto voluptatum
        dicta temporibus quam ratione vitae aliquid quod sed libero, culpa
        numquam eligendi? Minus quaerat voluptatum earum libero laudantium
        nihil. Animi non voluptate illum nam ut, inventore officia! Sit voluptas
        impedit quos. Sint mollitia ipsum, nobis, repellendus officiis debitis,
        facere temporibus aliquid dolorum cum dolorem quaerat labore optio eos
        facilis? Quasi, praesentium officia! Doloremque voluptatum dolore
        tempore facilis in molestias repellat harum nesciunt asperiores error,
        numquam beatae. Iure corrupti totam magni vel obcaecati voluptas, quas
        laboriosam atque deleniti consectetur voluptatum. Esse laboriosam
        provident eaque id, minima, officiis velit asperiores necessitatibus,
        illum quaerat quae molestias ratione sed dolorum! Iusto, dolor
        obcaecati, facere tempore voluptatibus est libero provident commodi
        quaerat ad reiciendis? Cum, accusantium dignissimos maiores dolore
        quisquam non ducimus molestiae nostrum maxime debitis eaque voluptas,
        veniam atque eligendi explicabo dolores expedita fuga nulla sit ad
        reprehenderit perferendis neque laudantium vel? Reprehenderit. Maxime
        repudiandae pariatur commodi, molestias enim atque quidem corrupti
        explicabo accusamus quae, fuga illum magni ducimus voluptates excepturi
        necessitatibus sed tempora porro provident culpa mollitia placeat eum
        facere. Placeat, ut. Amet tenetur molestias neque? Tempore animi ea
        reiciendis aspernatur asperiores magnam, vel eum maiores consectetur
        error facilis, nemo explicabo molestias ab magni dicta iste cumque
        facere dignissimos reprehenderit voluptatibus hic! Obcaecati magni vitae
        amet quis, consequuntur deleniti nulla eius earum, praesentium
        repellendus iure iusto rerum doloribus repudiandae quisquam quaerat iste
        eveniet laudantium. Eaque vitae culpa rem optio nisi tenetur nulla.
        Magni, tenetur velit quasi aliquid veritatis expedita cum dolore sed
        laudantium, cupiditate eius recusandae dolor quisquam reiciendis quis
        voluptas fugiat nulla debitis! Eos ex, optio error ab soluta quia iste.
        In, alias ad quia reprehenderit cumque praesentium facilis aliquam a
        quod sint cum ea quidem, dolore odio omnis. Praesentium odio illum, odit
        nostrum esse voluptatum nesciunt dignissimos tempora fugit neque.
        Accusamus laborum adipisci sequi vitae, eaque temporibus obcaecati
        reiciendis, dolorem atque quas blanditiis architecto ut est doloribus
        velit fugit aspernatur doloremque assumenda? Quod molestias corporis
        amet officia fuga esse cumque. Iure officiis dolor quis minima autem eos
        harum maxime laudantium nulla incidunt, ipsam delectus et eius repellat
        velit alias quae repellendus accusamus cupiditate error. Cum labore in a
        nostrum commodi. Laudantium, atque repellat omnis officia aperiam
        dolores voluptatem explicabo cupiditate sint magnam libero quasi,
        dolorem odio dolor provident repellendus reiciendis saepe natus
        asperiores, voluptates illo aut cum. Dolorem, tenetur nostrum. Corporis
        vero commodi accusantium! Illo error deserunt voluptate autem, numquam
        recusandae praesentium reiciendis quae quis ea consequatur porro
        aspernatur ut unde consectetur tempora nam ex temporibus voluptatibus
        iusto commodi nemo! Eaque fugit temporibus accusantium facere,
        asperiores beatae eligendi! Exercitationem quidem id dicta, ab numquam
        eligendi ipsa similique at, aliquid qui tempora blanditiis perspiciatis,
        doloribus quas culpa odit quod modi laudantium. Earum eveniet
        repellendus aut, rem velit excepturi consequuntur sequi repudiandae!
        Consequatur soluta necessitatibus blanditiis, id itaque iste beatae
        nulla deserunt veniam dolorum unde tempora nihil quia perspiciatis
        sapiente dolorem quam! Voluptatibus, nulla tempora dolore dolores
        officiis animi voluptas autem natus nostrum, ad ullam, vel omnis
        possimus fugiat. Illum voluptates enim ullam quo voluptatibus
        reprehenderit mollitia, aliquam quis reiciendis quam placeat.
      </span>
    </>
  );
};

export default Home;

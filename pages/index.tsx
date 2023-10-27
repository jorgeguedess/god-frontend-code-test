import Head from "next/head";
import Cards from "../src/components/Cards";

const Home = () => {
  // console.log(process.env.NEXT_PUBLIC_API_URL);

  return (
    <>
      <Head>
        <title>Volvo Cars</title>
      </Head>
      <div>
        <Cards />
      </div>
    </>
  );
};

export default Home;

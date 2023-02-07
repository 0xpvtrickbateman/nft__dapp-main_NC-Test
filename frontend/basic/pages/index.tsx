import type { NextPage } from "next";
import Head from "next/head";
import SplashBanner from "@components/landing/Splash";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Wagner's Nightmare</title>
        <meta
          name="Wagner's Nightmare"
          content="is a send-up to the most absurd, controversial, and influential composer of all time; Richard Wagner."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SplashBanner />
    </div>
  );
};

export default Home;

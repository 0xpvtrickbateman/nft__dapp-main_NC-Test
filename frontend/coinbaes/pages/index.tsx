import type { NextPage } from "next";
import Head from "next/head";
import SplashBanner from "@components/landing/Splash";
import About from "@components/landing/About";
import Team from "@components/landing/Team";
import FAQ from "@components/landing/FAQ";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Minting Site</title>
        <meta
          name="Wagner's Nightmare"
          content="is a send-up to the most absurd, controversial, and influential composer of all time; Richard Wagner."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SplashBanner />
      <About />
      <Roadmap />
      <Team />
      <FAQ />
    </div>
  );
};

export default Home;

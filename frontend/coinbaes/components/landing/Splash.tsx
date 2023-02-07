import { Button } from "@chakra-ui/react";
import styles from "@styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const SplashBanner = () => {
  return (
    <div id="splash">
      <div className={styles.background}>
        <main className={styles.main}>
          <h1 className={styles.splashTitle}>Wagner's Nightmare</h1>
          <Link href="/mint">
            <Button
              style={{
                fontFamily: "'Press Start 2P', cursive",
                color: "#4b4f56",
                borderRadius: "0",
              }}
            >
              ⚡️ minting now ⚡️
            </Button>
          </Link>
          <div className={styles.coinbaes}>
            <Image src="/assets/Wagner-1.png" height={300} width={300} />
            <Image src="/assets/Wagner-2.png" height={300} width={300} />
            <Image src="/assets/Wagner-3.png" height={300} width={300} />
            <Image src="/assets/Wagner-4.png" height={300} width={300} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SplashBanner;

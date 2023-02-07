import styles from "@styles/Home.module.css";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";

const Team = () => {
  return (
    <div id="team">
      <div className={styles.container}>
        <main className={styles.mainPadding}>
          <h1 className={styles.title}>Team</h1>
          <SimpleGrid columns={[1, 3, 5]} spacing="40px">
            <Box
              alignContent={"center"}
              alignItems="center"
              justifyContent="center"
            >
              <Image
                alt="placeholder image for team members"
                src={"/assets/usdc.png"}
                width={250}
                height={250}
              />
              <p className={styles.center}>
                <strong>Daniel Olson</strong>
                <br />
                violist
              </p>
            </Box>
            <Box
              alignContent={"center"}
              alignItems="center"
              justifyContent="center"
            >
              <Image
                alt="Daniel-Orsen"
                src={"/assets/Daniel Orsen.jpeg"}
                width={250}
                height={250}
              />
              <p className={styles.center}>
                <strong>Pierre-Nicolas Colombat </strong>
                <br />
                piano
              </p>
            </Box>
            <Box>
              <Box background="pink">
                <Image
                  alt="Pierre-Nicholas"
                  src={"/assets/Pierre-Nicolas.jpeg"}
                  width={250}
                  height={250}
                />
              </p>
            </Box>
          </SimpleGrid>
        </main>
      </div>
    </div>
  );
};

export default Team;

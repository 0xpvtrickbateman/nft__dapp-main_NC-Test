import styles from "@styles/Home.module.css";

const About = () => {
  return (
    <div id="about">
      <div className={styles.container}>
        <main className={styles.mainPadding}>
          <h1 className={styles.blueTitle}>About</h1>
          <div className={styles.content}>
            <p className={styles.description}>
              {`What is Wagner's Nightmare? WAGNER’S NIGHTMARE 
is a send-up to the most absurd, controversial, and influential composer of all time; Richard Wagner.`}
              <br />
              <br />
              {``}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;

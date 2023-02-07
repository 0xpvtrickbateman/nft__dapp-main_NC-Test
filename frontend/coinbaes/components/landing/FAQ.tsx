import styles from "@styles/Home.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const FAQ = () => {
  const faqData = [
    {
      question: "What is Wagner's Nightmare?",
      answer:
        "Wagner's Nightmare is a send-up to the most absurd, controversial, and influential composer of all time; Richard Wagner.",
    },
    {
      question: "Who are the artists behind Wagner's Nightmare?",
      answer:
        "Daniel Orsen, violist, and Pierre-Nicolas Colombat, piano.",
    },
    {
      question:
        "How do I get the music?",
      answer:
        "Mint an NFT! Every Wagner's Nightmare comes with gated access to the album drop.",
    },
  ];

  return (
    <div id="faq">
      <div className={styles.container}>
        <main className={styles.mainPadding}>
          <h1 className={styles.title}>FAQ</h1>
          <div className={styles.content}>
            <Accordion sx={{ width: "100%" }} allowToggle>
              {faqData.map((faq, idx) => {
                return (
                  <AccordionItem key={idx}>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <p style={{ fontWeight: "bold", fontSize: 18 }}>
                            {faq.question}
                          </p>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <p> {faq.answer}</p>
                    </AccordionPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FAQ;

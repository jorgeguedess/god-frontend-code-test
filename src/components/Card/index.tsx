import Image from "next/image";
import { ICar } from "../../types/car";
import { Block, Flex, Link, Text } from "vcc-ui";

import styles from "./Card.module.css";

const Card = ({ bodyType, modelName, modelType, imageUrl }: ICar) => {
  return (
    <Block>
      <Link href="#" className={styles.card}>
        <Text
          extend={{
            textTransform: "uppercase",
            fontWeight: "500 !important",
          }}
          variant="bates"
          foreground="foreground.secondary"
        >
          {bodyType}
        </Text>
        <Text
          extend={{
            fontWeight: "bold !important",
            marginBottom: "1.25rem",
          }}
        >
          {modelName} <span className={styles.modelType}>{modelType}</span>
        </Text>

        <Image src={imageUrl} alt={modelName} width={800} height={600} />
      </Link>

      <Flex
        extend={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <Link href="#" arrow="right">
          Learn
        </Link>

        <Link href="#" arrow="right">
          Shop
        </Link>
      </Flex>
    </Block>
  );
};

export default Card;

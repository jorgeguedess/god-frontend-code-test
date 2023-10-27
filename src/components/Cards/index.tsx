// import { Col, Grid, Row } from "vcc-ui";
import { useCar } from "../../context/CarContext";
import Card from "../Card";
import styles from "./Cards.module.css";

const Cards = () => {
  const { data } = useCar();

  return (
    // <Grid>
    //   <Row align="center">
    //     {data?.map((item) => (
    //       <Col key={item.id} size={3}>
    //         <Card {...item} />
    //       </Col>
    //     ))}
    //   </Row>
    // </Grid>
    <main className={styles.cards}>
      {data?.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </main>
  );
};

export default Cards;

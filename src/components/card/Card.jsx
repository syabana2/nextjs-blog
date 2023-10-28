import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sit.
          </h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum optio non explicabo ea excepturi nisi veniam qui sequi aut sint, enim facilis veritatis, animi vel facere ducimus, asperiores delectus? Totam fuga saepe, quos mollitia alias aliquid quod asperiores sed officiis omnis labore! Iusto quos est consectetur odit nihil, accusantium similique.
        </p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;

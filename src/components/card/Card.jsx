import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";

const dateOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

const Card = ({ post }) => {
  const formattedDate = new Date(post.createdAt).toLocaleString("id-ID", dateOptions);

  return (
    <div className={styles.container} key={post.id}>
      <div className={styles.imageContainer}>
        <Image src={`${post.img}`} alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{formattedDate} - </span>
          <span className={styles.category}>{post.catSlug.toUpperCase()}</span>
        </div>
        <Link href="/">
          <h1>{post.title} </h1>
        </Link>
        <p className={styles.desc}>{post.desc} </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;

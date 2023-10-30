import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";
import formatDate from "@/utils/helper";

const Card = ({ post }) => {
  return (
    <div className={styles.container} key={post.id}>
      {post.img && (
        <div className={styles.imageContainer}>
          <Image src={`${post.img}`} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{formatDate(post.createdAt)} - </span>
          <span className={styles.category}>{post.catSlug.toUpperCase()}</span>
        </div>
        <Link href={`/posts/${post.slug}`}>
          <h1>{post.title}</h1>
        </Link>
        <p className={styles.desc}>{post.desc.substring(0, 200)}...</p>
        <Link href={`/posts/${post.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;

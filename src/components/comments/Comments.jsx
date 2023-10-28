import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";

export const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            name="comment"
            id="comment"
            placeholder="write a comment..."
            className={styles.input}
          />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="avatar"
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
          <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam provident recusandae nam iusto facere, facilis aperiam rem deleniti velit dolore aliquam quod sequi quis veritatis repudiandae, reiciendis itaque cum! Sapiente?</p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="avatar"
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
          <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam provident recusandae nam iusto facere, facilis aperiam rem deleniti velit dolore aliquam quod sequi quis veritatis repudiandae, reiciendis itaque cum! Sapiente?</p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="avatar"
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
          <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam provident recusandae nam iusto facere, facilis aperiam rem deleniti velit dolore aliquam quod sequi quis veritatis repudiandae, reiciendis itaque cum! Sapiente?</p>
        </div>
      </div>
    </div>
  );
};

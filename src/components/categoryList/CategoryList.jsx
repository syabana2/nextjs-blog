import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const getDataCategory = async () => {
  const res = await fetch(`${process.env.URL}/api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryList = async () => {
  const categories = await getDataCategory();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Category</h1>
      <div className={styles.categories}>
        {categories?.map((categories) => (
          <Link
            href={`/blog?cat=${categories.slug}`}
            className={`${styles.category} ${styles[categories.slug]}`}
            key={categories.id}
          >
            {categories.img && (
              <Image
                src={categories.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {categories.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;

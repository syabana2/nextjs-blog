"use client";

import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";

function Pagination({ page, cat, hasPrev, hasNext }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => router.push(`?cat=${cat || ""}&page=${page - 1}`)}
        disabled={!hasPrev}
      >
        Previous
      </button>
      <button
        className={styles.button}
        onClick={() => router.push(`?cat=${cat || ""}&page=${page + 1}`)}
        disabled={!hasNext}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;

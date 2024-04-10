import React from "react";
import styles from "./singleBlog.module.css";
import Image from "next/image";

const SingleBlog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/family.jpeg" alt="tour pics" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Srilanka Tours</h1>
        <div className={styles.detail}>
          <Image
            src="/img_1.jpeg"
            width={30}
            height={30}
            alt="profile image"
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Rawshan Ali</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>10.04.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
          atque autem voluptatum ipsam, dolor fuga laborum tempore, adipisci
          dolorem blanditiis totam porro neque obcaecati laudantium illo ipsum
          nesciunt fugit animi.
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;

import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="/family.jpeg"
            fill
            alt="postCard Image"
            className={styles.img}
          />
        </div>
        <span className={styles.date}>10.04.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Srilanka Tour</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quod
          culpa eos unde soluta deserunt a asperiores optio, sed cupiditate
          consectetur libero neque tenetur reprehenderit totam doloremque id
          expedita alias.
        </p>
        <Link className={styles.link} href="/blogs/post">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;

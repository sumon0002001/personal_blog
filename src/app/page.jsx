import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Mir Rawshan Ali</h1>
        <p className={styles.desc}>
          I am a Software Developer. I love coding. I am a traveler also I
          travel a lot. I love to explore new places. I am a food lover also. I
          love to eat new and delicious food. I am a music lover also. I love to
          explore new food and music in different places. I love to learn new
          things.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact Me</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="Brands"
            fill
            className={styles.brandImg}
          />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="Hero" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;

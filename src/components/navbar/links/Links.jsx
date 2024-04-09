import React from "react";
import styles from "./links.module.css";
import Link from "next/link";
import Navlink from "./navlink/Navlink";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blogs",
    path: "/blogs",
  },
];

const Links = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <Navlink key={link.title} item={link} />
        ))}
      </div>
    </div>
  );
};

export default Links;

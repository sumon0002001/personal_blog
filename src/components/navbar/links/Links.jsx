"use client";
import React, { useState } from "react";
import styles from "./links.module.css";
import Link from "next/link";
import Navlink from "./navlink/Navlink";
import Image from "next/image";

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

const isSession = true;
const isAdmin = true;

const Links = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <Navlink key={link.title} item={link} />
        ))}
        {isSession ? (
          <>
            {isAdmin && <Navlink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}> Log Out</button>
          </>
        ) : (
          <Navlink key={"Login"} item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        src="/menu.png"
        alt="menu"
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
        className={styles.menuButton}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <Navlink key={link.title} item={link} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;

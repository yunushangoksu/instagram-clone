import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./page.module.css";

function page() {
  return (
    <div className={styles.messageWrapper}>
      <Navbar />
    </div>
  );
}

export default page;

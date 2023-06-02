import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Feed from "@/components/Feed/Feed";
import Profiledetails from "@/components/Profiledetails/Profiledetails";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.FeedWrapper}>
        <Feed />
        <Profiledetails />
      </div>
    </main>
  );
}

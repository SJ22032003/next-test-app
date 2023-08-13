import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { useStore } from "@/context";

export default function MainHome() {
  const { setTitle } = useStore();
  setTitle("Home");

  return (
    <main className={styles.mainHeading}>
      <h1>Generate Users By Clicking below</h1>
      <section>
        <Link href="/users">
          <button className={styles.mainBtn}>Generate Users</button>
        </Link>
      </section>
    </main>
  );
}

"use client";
import Image from "next/image";
import styles from "./about.module.scss";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import dynamic from "next/dynamic";

export default function Home() {
  // const router  = useRouter()
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/about/page.tsx</code>
        </p>
      </div>
      <div className={styles.about}>about</div>
    </main>
  );
}

import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { redirect } from 'next/navigation'

export default function Home() {
  // const router  = useRouter()
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
      </div>
      <Link href="/dashboard" className={styles.link_dashboard}>
        dashboard
      </Link>
      <Link href={'./about'}>about</Link>
    </main>
  );
}

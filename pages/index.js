import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Almost Original</title>
        <meta name="description" content="Punk-Rock Covers Band" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Almost<br/>Original
        </h1>

        <p className={styles.description}>
          Site under construction. Won't be long, promise!
        </p>
      </main>
    </div>
  )
}

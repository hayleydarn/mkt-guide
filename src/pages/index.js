import Head from 'next/head';
import styles from '/Users/hayleyrobertson/Development/2022/sebago-markets/mapeg/next-leaflet-starter/styles/Home.module.css';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Sebago Area Farmers Market Guide</h1>
        <p className={styles.description}>Spring / Summer 2022</p>
        <div className={styles.grid}>
          <a href="/map" className={styles.card}>
          <h2>The Farm Map &rarr;</h2>
          </a>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Farmers Markets &rarr;</h2>
            {/* <p>get market hours and locations</p> */}
          </a>
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Farm Stands &rarr;</h2>
            {/* <p>discover pop-up farm stands near you</p> */}
          </a>
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Meat & Fish &rarr;</h2>
            {/* <p>find your local butcher</p> */}
          </a>
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Visit a Farm &rarr;</h2>
            <p></p>
          </a>
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Join a CSA &rarr;</h2>
            <p></p>
          </a>
        </div>
        <p>get in touch to put your farm on the map!</p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
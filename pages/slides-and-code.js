import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function SEOTypes() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Slides and Code - Learn SEO</title>
        <meta name="description" content="Get access to the slides of this talk and the github repository with code examples." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Search Engine Optimisation
        </h1>

        <section>
          <h2 className={styles.sectionTitle}>Slides and code</h2>
          <div className={styles.grid}>
            <a href="/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer">
              Slides
            </a>

            <a
              href="https://github.com/anuk79/nextjs-seo-demo"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer">
              GitHub repo
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

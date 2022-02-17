import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learn SEO</title>
        <meta name="description" content="Learn SEO - meta, sitemaps, open graph!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Search Engine Optimisation
        </h1>

        <div className={styles.grid}>
          <Link href="https://developers.google.com/search/docs/beginner/seo-starter-guide">
            What is SEO &rarr;
          </Link>
          <Link href="/seo-types">Types of SEO &rarr;</Link>
          <Link href="/examples">Examples &rarr;</Link>
          <Link href="/slides-and-code">Slides and Code</Link>
        </div>
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

import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function SEOTypes() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Examples - Learn SEO</title>
        <meta name="description" content="Checkout the examples of how to optimise your website for search engines" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Search Engine Optimisation
        </h1>
        <section>
          <h2 className={styles.sectionTitle}>Examples</h2>
          <ol>
            <li>Adding proper title</li>
            <li>Meta description</li>
          </ol>
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

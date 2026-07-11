import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">

        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>

        <p className="hero__subtitle">
          {siteConfig.tagline}
        </p>

        <p
          style={{
            maxWidth: "850px",
            margin: "2rem auto",
            lineHeight: "1.7",
          }}
        >
          Personal research notes, technical write-ups, and projects documenting
          my journey through Windows Internals, WinAPI, Malware Development,
          Malware Analysis, and Reverse Engineering.
        </p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/about">
            📚 Documentation
          </Link>

          <Link
            className="button button--outline button--lg"
            href="https://github.com/abdelrahman72-22">
            💻 GitHub
          </Link>
        </div>

      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="SilentRoot"
      description="Malware Research • Windows Internals • WinAPI">
      <HomepageHeader />
    </Layout>
  );
}
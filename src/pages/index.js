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

        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <p style={{ maxWidth: "800px", margin: "2rem auto" }}>
          A technical knowledge base documenting my learning journey in
          Windows Internals, WinAPI, Malware Analysis, Malware Development,
          Reverse Engineering, DFIR, and Cyber Threat Intelligence.
        </p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            📚 Documentation
          </Link>

          {" "}

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
      description="Windows Internals • Malware Research • DFIR • CTI">
      <HomepageHeader />
    </Layout>
  );
}
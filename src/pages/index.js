import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <div style={{ marginBottom: "1.5rem" }}>
          <img
            // src="/img/firechain-hero.png"
            alt="FireChain Documentation"
            style={{
              maxWidth: "180px",
              width: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>

        <h1 className="hero__title">FireChain Documentation</h1>

        <p
          className="hero__subtitle"
          style={{ maxWidth: "760px", margin: "0 auto 1rem" }}
        >
          Explore the official FireChain documentation for network setup, RPC
          endpoints, bridge guides, wallet connections, developer resources,
          and verified addresses across the ecosystem.
        </p>

        <p style={{ maxWidth: "720px", margin: "0 auto 1.5rem", fontSize: "1rem" }}>
          Start building, connect your wallet, bridge FIRE from supported
          networks, and interact with the FireChain ecosystem with confidence.
        </p>

        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/introduction/welcome">
            Get Started 🔥
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const title = "FireChain Documentation";
  const description =
    "Official FireChain docs for wallet setup, bridge usage, RPC endpoints, developer resources, and verified ecosystem addresses.";
  const image = "/img/firechain-hero.png";

  return (
    <Layout title={title} description={description}>
      <Head>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>

      <HomepageHeader />

      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
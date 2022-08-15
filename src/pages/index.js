import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Basic from '@site/src/components/ContactForm';



import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* <div className={styles.buttons}>
        <Link
            className={clsx(
              'button button--outline button--secondary button--lg',
              styles.heroButton
            )}
            to="/docs/intro">
            Book a Demo
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - 5GC Test Automation`}
      description="Cloud-Native Test Automation Platform for 5G Core ">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className={styles.forms}>
        <p>  <Basic /></p>
        </div>
      </main>
    </Layout>
  );
}

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Distributed Architecture',
    Svg: require('@site/static/img/distributed_arch.svg').default,
    description: (
      <>
        Auto horizontal scaling up to millions of emulated subscribers and devices 
        at rates of tens of thousands of events per second and traffic of Gigabits per second.
      </>
    ),
  },
  {
    title: 'Developer Friendly',
    Svg: require('@site/static/img/dev_friendly.svg').default,
    description: (
      <>
        For Engineers, by Engineers.
        Provides the best in class yet easy to use functional, performance and security test options for 5G core network.
      </>
    ),
  },
  {
    title: 'CI/CT/CD Driven',
    Svg: require('@site/static/img/automation.svg').default,
    description: (
      <>
         Vast integrations with popular CI tools. 
         Elimintaing the need for protocol expertise while maintaining robust capabillities 
         for customization options of every detail in tests of complex flows and scenarios and their correspondent metrics,
          automatically.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

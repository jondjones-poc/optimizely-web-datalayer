import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import React, { useRef, useEffect, useState } from "react";
import Link from 'next/link'

export default function Home() {

  const [bucketOne, setbucketOne] = useState(false);
  let optimizelyData;

  const forceBucket = () => {

    const bucketType = bucketOne ? 1 : 0;

    optimizelyData?.push({
      "type": "bucketVisitor",
      "experimentId": process.env.NEXT_PUBLIC_EXPERIMENT_ID,
      "variationIndex": bucketOne
    });

    console.log('forceBucket', bucketType, process.env.NEXT_PUBLIC_EXPERIMENT_ID);

    setbucketOne(!bucketOne);
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      {/* Call Opti-Web and set beforeInteractive */}
      <Script id="opti-script" src="https://cdn.optimizely.com/js/21454571283.js" type="text/javascript" strategy="beforeInteractive" />

      <div className={styles.container}  onScroll={() => handleScroll()} >
        <main className={styles.main}>

          <h3>

          </h3>
          <div className={styles.box}>
            <div  className={styles.buttonBox}>
              <button onClick={() => forceBucket()} className={styles.button}>
                  Force Bucket User
              </button>
            </div>
          </div>

        </main>
        <footer className={styles.list}>
        </footer>
    </div>
    </>)
}

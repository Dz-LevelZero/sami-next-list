import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sami List | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, nisi nihil voluptatibus est sit!</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, nisi nihil voluptatibus est sit!</p>
        <Link href="/sami">
          <a className={styles.btn}>Go to Sami page</a>
        </Link>
      </div>
    </>
  )
}

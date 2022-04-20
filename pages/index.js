import Head from 'next/head'
import Image from 'next/image'
import Contact from '../components/Contact'
import Education from '../components/Education'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'
import Projects from '../components/Project'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Personal Portfolio</title>
        <link rel="stylesheet" href="tailwind.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="bg-body text-white font-poppins pb-12">

        <Navbar/>
        <Intro/>
        <Education/>
        <Projects/>
        <Contact/>

      </div>
    </div>
  )
}

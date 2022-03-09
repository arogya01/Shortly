import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import Features from '../components/core/Features/Features'
import HeroSection from '../components/core/HeroSection/HeroSection'
import PastLinks from '../components/core/PastLinks/PastLinks'
import Shortner from '../components/core/Shortener/Shortner'
// import Navbar from '../components/core/Navbar/Navbar'

const Navbar = dynamic(
  () => {
    return import('../components/core/Navbar/Navbar')
  },{
    ssr:false
  }
) 
export default function Home() {
  return (
       <>
       <Navbar />

       <HeroSection/>
       <Shortner />
       <PastLinks />
       <Features />
       </>
  )
}

import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import HeroSection from '../components/core/HeroSection/HeroSection'
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
       </>
  )
}

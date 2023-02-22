// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login')
  }, [])
  
  return (
    // <div className="font-bold text-red-400">aaa</div>
    <></>
  )
}

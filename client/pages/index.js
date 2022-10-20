import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { createClient } from "next-sanity";
import CallsCard from '../components/CallsCard';


export async function getServerSideProps() {
  const client = createClient({
    dataset: 'production',
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    apiVersion: '2022-09-10',
    useCdn: false
  })

  const groupCalls = await client.fetch(`*[_type == "calls"] | order(_createdAt desc)`)

  return {
    props: {
      groupCalls
    }
  }
}

export default function Home({ groupCalls }) {
  return (
    <div className="text-white">
      <h1 className="flex justify-center m-4 text-3xl text-white">Crossova Group Calls</h1>

      <div className=" ">
        <CallsCard groupCalls={groupCalls} />
      </div>
    </div>
  )
}

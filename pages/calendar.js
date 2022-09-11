import autoprefixer from 'autoprefixer';
import Head from 'next/head'
// import Image from 'next/image'
import React, { useState } from 'react';
import Calendar from 'react-calendar';

export default function Home() {

  const [value, onChange] = useState(new Date());

  return (
    <div className='grow overflow-auto'>
      <Head>
        <title>Hackathon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='p-6'>
        <h2 className='text-xl border-b border-orange-700/50 py-3 mb-2'>Calendar</h2>
          
        <div>
          <Calendar onChange={onChange} value={value} />
        </div>

        
      </main>
    </div>
  )
}
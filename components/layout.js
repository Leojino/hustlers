import Navbar from './navbar'
import Footer from './footer'
import Header from './header'

export default function Layout({ children }) {
    return (
      <div className='flex h-screen'>
        <Header/>
        <main className='w-full flex pt-12 bg-neutral-200'>
            <Navbar/>
            {children}
        </main>
      </div>
    )
  }
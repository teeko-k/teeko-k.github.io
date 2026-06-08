import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Work from '@/components/Work'

export default function Home() {
  return (
    // relative
    <main className="grain">
      <Header />
      <Hero />
      <Work />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

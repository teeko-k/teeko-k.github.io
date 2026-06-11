import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Work from "@/components/Work"
import Work02 from "@/components/Work02"

export default function Home() {
  return (
    // relative
    <main>
      <Header />
      <Hero />
      {/* <Work /> */}
      <Work02 />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

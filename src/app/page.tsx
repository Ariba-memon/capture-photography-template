import Image from 'next/image'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'
import Slider from '../../components/Slider'
import { SliderData } from '../../components/SliderData'
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
        heading="Capture Photography"
        message="I capture moments in Nature and keep them alive"
      />
      <Slider slides={SliderData} />
    </>
  )
}

import { Title } from "@/components/Title";
import { Image } from "@/components/Image";
import { OrderForm } from "@/components/OrderForm";
import { TechParams } from "@/components/TechParams";
import { useState } from "react";

const color_src = [ 'red', 'green', 'yellow']

export function App() {
  const [ src, setSrc ] = useState('/public/scooter/yellow.png')
  const onColor = (clr) => {
    const color = color_src.includes(clr) ? clr : 'yellow'
    console.log('ON color', color)
    setSrc(`/scooter/${color}.png`)
  }
  return <div className="landing-page">
    <Title />
    <div className="flex flex-col md:flex-row gap-3">
      <Image src={src} className="md:w-1/2"/>
      <OrderForm onColor={onColor} className="md:w-1/2" />
    </div>
    <div>
  <p>Our solar powered scooter is an eco-friendly and sustainable mode of transportation. With its solar panels, the scooter can travel long distances without relying on gasoline or diesel.</p>
    </div>
    <div>
      <TechParams />
    </div>
  </div>
}
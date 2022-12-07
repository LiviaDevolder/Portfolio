import { StaticImageData } from "next/image"

export interface ICards {
  title: string
  text: string
  image: string | StaticImageData
}

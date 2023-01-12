import { ILanguage } from "../interfaces/ILanguage";
import USA from "../../public/USA.png"
import Brazil from "../../public/Brazil.png"
import Spain from "../../public/Spain.png"
import France from "../../public/France.png"

export const language: ILanguage[] = [
  {
    name: 'Português',
    level: 'Nativo',
    image: Brazil
  },
  {
    name: 'Inglês',
    level: 'Avançado',
    image: USA
  },
  {
    name: 'Espanhol',
    level: 'Básico',
    image: Spain
  },
  {
    name: 'Francês',
    level: '',
    image: France
  }
]
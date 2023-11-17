import { HomeContainer } from "./style";
import paintSvg from '../../assets/paint.svg'

export function Home() {
  return (
    <HomeContainer>
      <h1>
        Discover <br /> more than <br /> 5000+ Jobs
      </h1>

      <img src={paintSvg} alt="" />

      <p>
        Ótima plataforma para quem procura emprego, busca novos patamares de carreira e é apaixonado por startups.
      </p>

      <div>

      </div>

      <p>
        Popular : UI Designer, UX Researcher, Android, Admin
      </p>
    </HomeContainer>
  )
}
import { MagnifyingGlass, MapPin } from "@phosphor-icons/react";
import { OutsetContainer, OutsetFormContainer } from "./style";
import paintSvg from '../../../../assets/paint.svg'

export function OutsetSection() {
  return (
    <OutsetContainer>
        <div>
          <h1>
            Encontre aqui a sua <br /> oportunidade <br /> <span>200+ Vagas</span>
          </h1>

          <img src={paintSvg} alt="Rabisco azul" />
        </div>

        <p>
          Ótima plataforma para quem procura emprego, busca novos patamares de carreira e é apaixonado por novos desafios.
        </p>

        <OutsetFormContainer>
          <div>
            <span><MagnifyingGlass size={24} color="#000000" /></span>
            <input type="text" placeholder="Nome da vaga" />
          </div>
          <div>
            <span><MapPin size={24} color="#000000" /></span>
            <input type="text" placeholder="Ijuí, RS" list="cities" />
            <datalist id="cities">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </datalist>
          </div>
          <button>Procurar vaga</button>
        </OutsetFormContainer>

        <p>
          Populares : Administrativo, Comercial, Gente e Gestão
        </p>
      </OutsetContainer>
  )
}
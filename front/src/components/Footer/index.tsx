import { BottomContainer, FooterContainer, LeftContainer, RightContainer, TopContainer } from "./style";
import logoSvg from '../../assets/logo.svg'
import { InstagramLogo } from "@phosphor-icons/react";

export function Footer() {
  return (
    <FooterContainer>
      <TopContainer>
        <RightContainer>
            <img src={logoSvg} alt="" />
            <p>
              Ótima plataforma para quem procura emprego. Encontre a vaga dos seus sonhos com mais facilidade.
            </p>
        </RightContainer>

        <LeftContainer>
            <div>
              <h3>Sobre</h3>

              <ul>
                <li>
                  <a href="#">Termos</a>
                </li>
                <li>
                  <a href="#">Recomendação</a>
                </li>
                <li>
                  <a href="#">Política de Privacidade</a>
                </li>
              </ul>
            </div>

            <div>
              <h3>Resources</h3>

              <ul>
                <li>
                  <a href="">Documentos de ajuda</a>
                </li>
                <li>
                  <a href="">Guia</a>
                </li>
                <li>
                  <a href="">Atualizações</a>
                </li>
                <li>
                  <a href="">Contate-nos</a>
                </li>
              </ul>
            </div>
        </LeftContainer>
      </TopContainer>

      <BottomContainer>
        <p>2021 @ JobHuntly. All rights reserved.</p>

        <ul>
          <li>
            <a href="#">
            <InstagramLogo size={16} color="#fff" />
            </a>
          </li>
          <li>
            <a href="#">
            <InstagramLogo size={16} color="#fff" />
            </a>
          </li>
          <li>
            <a href="#">
            <InstagramLogo size={16} color="#fff" />
            </a>
          </li>
          <li>
            <a href="#">
              <InstagramLogo size={16} color="#fff" />
            </a>
          </li>
          <li>
            <a href="#">
              <InstagramLogo size={16} color="#fff" />  
            </a>
          </li>
        </ul>
      </BottomContainer>
    </FooterContainer>
  )
}
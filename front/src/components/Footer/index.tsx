import { BottomContainer, FooterContainer, LeftContainer, RightContainer, TopContainer } from "./style";
import logoSvg from '../../assets/logo.svg'
import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";

export function Footer() {
  return (
    <FooterContainer>
      <TopContainer>
        <RightContainer>
            <img src={logoSvg} alt="#" />
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
                  <a href="#">Documentos de ajuda</a>
                </li>
                <li>
                  <a href="#">Guia</a>
                </li>
                <li>
                  <a href="#">Atualizações</a>
                </li>
                <li>
                  <a href="#">Contate-nos</a>
                </li>
              </ul>
            </div>
        </LeftContainer>
      </TopContainer>

      <BottomContainer>
        <p>2023 @ JobHuntly. Todos os direitos reservados.</p>

        <ul>
          <li>
            <a href="#">
            <InstagramLogo size={16} />
            </a>
          </li>
          <li>
            <a href="#">
            <FacebookLogo size={16} />
            </a>
          </li>
          <li>
            <a href="#">
            <LinkedinLogo size={16} />
            </a>
          </li>
          <li>
            <a href="#">
              <GithubLogo size={16} />
            </a>
          </li>
          <li>
            <a href="#">
              <TwitterLogo size={16} />
            </a>
          </li>
        </ul>
      </BottomContainer>
    </FooterContainer>
  )
}
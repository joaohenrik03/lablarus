import { RecognitionContainer } from "./style";
import vodafoneSvg from '../../../../assets/vodafone.svg'

export function RecognitionSection() {
  return (
    <RecognitionContainer>
      <h3>Reconhecidos por</h3>

      <ul>
        <li>
          <img src={vodafoneSvg} alt="" />
        </li>
        <li>
          <img src={vodafoneSvg} alt="" />
        </li>
        <li>
          <img src={vodafoneSvg} alt="" />
        </li>
        <li>
          <img src={vodafoneSvg} alt="" />
        </li>
        <li>
          <img src={vodafoneSvg} alt="" />
        </li>
      </ul>
    </RecognitionContainer>
  )
}
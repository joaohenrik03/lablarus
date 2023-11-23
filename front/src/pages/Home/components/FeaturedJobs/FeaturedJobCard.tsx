import { InstagramLogo } from "@phosphor-icons/react";
import { FeaturedJobCardContainer, FeaturedJobCardMid, FeaturedJobCardTop } from "./FeaturedJobStyle";

type FeaturesType = {
  name: string,
  color: string,
}

interface FeaturedJobCardProps {
  name: string,
  typeTime: string,
  company: string,
  address: string,
  slogan: string,
  features: FeaturesType[],
}

export function FeaturedJobCard({ name, typeTime, company, address, slogan, features }: FeaturedJobCardProps) {
  return (
    <FeaturedJobCardContainer>
      <FeaturedJobCardTop>
        <InstagramLogo size={48} color="#b41d1d" />

        <span>{typeTime}</span>
      </FeaturedJobCardTop>

      <FeaturedJobCardMid>
        <h4>{name}</h4>
        <address>{company} <span></span> {address}</address>
      </FeaturedJobCardMid>

      <p>
        {slogan}
      </p>

      <div>
        {features.map(() => {
          return (
            <h1>teste</h1>
          )
        })}
      </div>
    </FeaturedJobCardContainer>
  )
}
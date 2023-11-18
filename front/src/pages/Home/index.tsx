import { FeaturedJobsSection } from "./components/FeaturedJobs";
import { OutsetSection } from "./components/Outset";
import { RecognitionSection } from "./components/Recognition";
import { HomeContainer } from "./style";

export function Home() {
  return (
    <HomeContainer>
      <OutsetSection />  
      <RecognitionSection />
      <FeaturedJobsSection />
    </HomeContainer>
  )
}
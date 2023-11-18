import { InstagramLogo } from "@phosphor-icons/react";
import { FeaturedJobsContainer } from "./style";

export function FeaturedJobsSection() {
  return (
    <FeaturedJobsContainer>
      <h2>Featured Jobs</h2>  

      <div>
        <ul>
          <li>
            <div>
              <div>
                <InstagramLogo size={48} color="#b41d1d" />

                <span>Full Time</span>
              </div>

              <div>
                <h4>Email Marketing</h4>
                <address>Revolut <span>.</span> Madrid, Spain</address>
              </div>

              <p>
                Revolut is looking for Email Marketing to help team ma ...
              </p>

              <div>
                <span>Marketing</span>
                <span>Design</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </FeaturedJobsContainer>
  )
}
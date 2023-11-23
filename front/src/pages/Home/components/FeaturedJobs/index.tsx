import { FeaturedJobCard } from "./FeaturedJobCard";
import { FeaturedJobsContainer } from "./style";

export function FeaturedJobsSection() {
  const jobsList = [{
    name: 'Email Marketing',
    typeTime: 'Full Time',
    company: 'Revolut',
    address: 'Madrid, Spain',
    slogan: 'Revolut is looking for Email Marketing to help team ma ...',
    feature: [{
      name: 'Marketing',
      color: 'yellow',
    }, {
      name: 'Design',
      color: 'green',
    }],
  }, {
    name: 'Email Marketing',
    typeTime: 'Full Time',
    company: 'Revolut',
    address: 'Madrid, Spain',
    slogan: 'Revolut is looking for Email Marketing to help team ma ...',
    feature: [{
      name: 'Marketing',
      color: 'yellow',
    }, {
      name: 'Design',
      color: 'green',
    }],
  }, {
    name: 'Email Marketing',
    typeTime: 'Full Time',
    company: 'Revolut',
    address: 'Madrid, Spain',
    slogan: 'Revolut is looking for Email Marketing to help team ma ...',
    feature: [{
      name: 'Marketing',
      color: 'yellow',
    }, {
      name: 'Design',
      color: 'green',
    }],
  }, {
    name: 'Email Marketing',
    typeTime: 'Full Time',
    company: 'Revolut',
    address: 'Madrid, Spain',
    slogan: 'Revolut is looking for Email Marketing to help team ma ...',
    feature: [{
      name: 'Marketing',
      color: 'yellow',
    }, {
      name: 'Design',
      color: 'green',
    }],
  }, {
    name: 'Email Marketing',
    typeTime: 'Full Time',
    company: 'Revolut',
    address: 'Madrid, Spain',
    slogan: 'Revolut is looking for Email Marketing to help team ma ...',
    feature: [{
      name: 'Marketing',
      color: 'yellow',
    }, {
      name: 'Design',
      color: 'green',
    }],
  }, {
    name: 'Email Marketing',
    typeTime: 'Full Time',
    company: 'Revolut',
    address: 'Madrid, Spain',
    slogan: 'Revolut is looking for Email Marketing to help team ma ...',
    feature: [{
      name: 'Marketing',
      color: 'yellow',
    }, {
      name: 'Design',
      color: 'green',
    }],
  }]

  return (
    <FeaturedJobsContainer>
      <h2>Vagas em <span>destaque</span></h2>

      <div>
        <ul>
          {
            jobsList.map((job) => {
              return (
                <FeaturedJobCard 
                  key={job.name}
                  name={job.name}
                  typeTime={job.typeTime}
                  company={job.company}
                  address={job.address}
                  slogan={job.slogan}
                  features={job.feature}
                />
              )
            })
          }
        </ul>
      </div>
    </FeaturedJobsContainer>
  )
}
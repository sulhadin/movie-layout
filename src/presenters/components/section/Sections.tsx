import React from 'react'

import Section from './Section'
import { Container } from '../../home/styled/styled'
import { Display } from '../../../components/display/Display'
import useSections from './hooks/useSections'

const Sections: React.FC = () => {
  const { favoriteData, collection, onItemClick } = useSections()

  if (!collection) {
    return <>Loading...</>
  }

  return (
    <>
      {collection.map((d) => (
        <Container key={d.id}>
          <Section title={d.title} data={d.data} onItemClick={onItemClick} />
        </Container>
      ))}

      <Display display={favoriteData.length >= 3}>
        <Container>
          <Section
            title={'Favoriler'}
            data={favoriteData}
            onItemClick={onItemClick}
          />
        </Container>
      </Display>
    </>
  )
}

export default Sections

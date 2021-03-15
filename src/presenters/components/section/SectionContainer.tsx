import React from 'react'

import Section from './components/Section'
import { Display } from '../../../components/display/Display'
import useSections from './hooks/useSections'
import MainSection from './components/MainSection'

const SectionContainer: React.FC = () => {
  const { favoriteData, collection, onItemClick } = useSections()

  if (!collection) {
    return <>Loading...</>
  }

  return (
    <>
      <MainSection collection={collection} onItemClick={onItemClick} />

      <Display display={favoriteData.length >= 3}>
        <Section title="Favoriler" data={favoriteData} onItemClick={onItemClick} />
      </Display>
    </>
  )
}

export default SectionContainer

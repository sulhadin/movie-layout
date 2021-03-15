import React, { memo } from 'react'
import Section from '../Section'
import { ICollection, IMovie } from '../../../../types/movie'

interface IMainSection {
  collection: ICollection[]
  onItemClick: (movie: IMovie) => void
}

const MainSection: React.FC<IMainSection> = ({ collection, onItemClick }) => (
  <>
    {collection.map((item) => (
      <Section key={item.id} title={item.title} data={item.data} onItemClick={onItemClick} />
    ))}
  </>
)

export default memo(MainSection)

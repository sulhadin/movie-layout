import React, { memo } from 'react'
import { IMovie } from '../../../types/movie'
import { Row, Col } from '../../../components/grid/Grid'
import { FavoriteButton, ImageContent, ShortInfo, Image } from './styled'
import { useAppSelector } from '../../../store/helpers/hooks'
import { selectPreferences } from '../../../store/preferencesStore'
import { Container, Title } from '../../home/styled/styled'
import { getYear } from './hooks/helpers/getYear'

interface ISection {
  data: IMovie[]
  onItemClick: (section: IMovie) => void
  title: string
}

const Section: React.FC<ISection> = ({ data, onItemClick, title }) => {
  const { favorites } = useAppSelector(selectPreferences)

  return (
    <Container>
      <Title>{title}</Title>
      <Row gutter={8}>
        {data.map((item) => (
          <Col xl={4} md={3} sm={2} key={item.uId}>
            <ImageContent>
              <FavoriteButton favorite={favorites.includes(item.uId)} onClick={() => onItemClick(item)} />
              <Image src={`assets/images/${item.image}`} alt={item.subTitle} />
              <ShortInfo>
                <p>{item.title}</p>
                <p>{item.subTitle}</p>
                <p>{getYear(item.published_date)}</p>
              </ShortInfo>
            </ImageContent>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default memo(Section)

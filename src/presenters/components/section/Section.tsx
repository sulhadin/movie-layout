import React from 'react'
import { IMovie } from '../../../types/movie'
import { Row, Col } from '../../../components/grid/Grid'
import { FavoriteButton, ImageContent, ShortInfo, Image } from './styled'
import { useAppSelector } from '../../../app/hooks'
import { selectPreferences } from '../../../reducers/preferencesSlice'
import { Title } from '../../home/styled'

interface ISection {
    data: IMovie[]
    onItemClick: (section: IMovie) => void
    title: string
}

const Section: React.FC<ISection> = ({ data, onItemClick, title }) => {
    const { favorites } = useAppSelector(selectPreferences)

    if (!data.length) {
        return <></>
    }

    return (
        <>
            <Title>{title}</Title>
            <Row gutter={8}>
                {data.map((item) => (
                    <Col xl={4} md={3} sm={2} key={item.id}>
                        <ImageContent>
                            <FavoriteButton
                                favorite={favorites.includes(item.uId)}
                                onClick={() => onItemClick(item)}
                            />
                            <Image
                                src={`assets/images/${item.image}`}
                                alt={item.subTitle}
                            />
                            <ShortInfo>
                                <p>{item.title}</p>
                                <p>{item.subTitle}</p>
                                <p>
                                    {new Date(
                                        item.published_date
                                    ).getFullYear()}
                                </p>
                            </ShortInfo>
                        </ImageContent>
                    </Col>
                ))}
            </Row>{' '}
        </>
    )
}

export default Section

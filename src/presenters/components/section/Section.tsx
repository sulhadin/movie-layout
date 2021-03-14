import React, { useEffect, useState } from 'react'
import { TSection } from '../../../types'
import getSection from './helpers/getSection'
import { SectionEnums } from '../../../enums/SectionEnums'
import { Row, Col } from '../../../components/grid/Grid'
import { FavoriteButton, ImageContent, ShortInfo, Image } from './styled'

interface ISection {
    sectionType: SectionEnums
    onItemClick: (section: TSection) => void
}

const Section: React.FC<ISection> = ({ sectionType, onItemClick }) => {
    const [section, setSection] = useState<TSection[]>()

    useEffect(() => {
        getSection(sectionType).then((response) => {
            setSection(response)
        })
    }, [sectionType])

    if (!section) {
        return <>Loading...</>
    }

    return (
        <Row gutter={8}>
            {section.map((item) => (
                <Col xl={4} md={3} sm={2} key={item.id}>
                    <ImageContent>
                        <FavoriteButton
                            favorite={true}
                            onClick={() => onItemClick(item)}
                        />
                        <Image
                            src={`assets/images/${item.image}`}
                            alt={item.subTitle}
                        />
                        <ShortInfo>
                            <p>{item.title}</p>
                            <p>{item.subTitle}</p>
                        </ShortInfo>
                    </ImageContent>
                </Col>
            ))}
        </Row>
    )
}

export default Section

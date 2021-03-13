import React, { useEffect, useState } from 'react'
import { TSection } from '../../../types'
import getSection from './helpers/getSection'
import { SectionEnums } from '../../../enums/SectionEnums'

interface ISection {
    sectionType: SectionEnums
}

const Section: React.FC<ISection> = ({ sectionType }) => {
    const [section, setSection] = useState<TSection[]>()

    useEffect(() => {
        getSection(sectionType).then((response) => {
            setSection(response)
        })
    }, [sectionType])

    if (!section) {
        return <>Loading...</>
    }

    console.log('section' + sectionType.toString(), section)

    return (
        <div className="row">
            {/*<Test />*/}
            {section.map((m) => (
                <div className="column" key={m.id}>
                    <img src={`images/${m.image}`} alt={m.subTitle} />
                    {m.title}{' '}
                </div>
            ))}
        </div>
    )
}

export default Section

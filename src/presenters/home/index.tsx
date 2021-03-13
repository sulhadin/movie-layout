import React from 'react'

import Header from '../components/header/Header'
import Section from '../components/section/Section'
import { SectionEnums } from '../../enums/SectionEnums'

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <div>
                <h1>Movies</h1>
                <Section sectionType={SectionEnums.MOVIES} />
            </div>
            <div>
                <h1>Series</h1>
                <Section sectionType={SectionEnums.SERIES} />
            </div>
        </>
    )
}

export default Home

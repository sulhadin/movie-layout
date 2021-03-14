import React from 'react'
import styled from 'styled-components'

/**
 * Reference values
 *
 * sm: 0 - 767px
 * md: 767px - 991px
 * xl: 992px - infinity
 */

interface IRow {
    gutter?: number
}

interface ICol {
    sm: number
    md: number
    xl: number
}

const size = {
    mobile: '767px',
    tablet: '768px',
    laptop: '992px',
}

export const device = {
    mobile: `max-width: ${size.mobile}`,
    tablet: `min-width: ${size.tablet}`,
    laptop: `min-width: ${size.laptop}`,
}

export const Row = styled.div<IRow>`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    row-gap: ${(props) => (props.gutter ?? 0) * 2}px;
    margin-left: -${(props) => props.gutter ?? 0}px;
    margin-right: -${(props) => props.gutter ?? 0}px;

    > div {
        padding-left: ${(props) => props.gutter ?? 0}px;
        padding-right: ${(props) => props.gutter ?? 0}px;
        box-sizing: border-box;
    }
`

export const Col = styled.div<ICol>`
    // sm
    @media (${device.mobile}) {
        width: ${(props) => 100 / props.sm}%;
    }

    // md
    @media (${device.tablet}) {
        width: ${(props) => 100 / props.md}%;
    }

    // xl
    @media (${device.laptop}) {
        width: ${(props) => 100 / props.xl}%;
    }
`

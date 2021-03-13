import styled from 'styled-components'

interface ILayout {
    background: string
}

export const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`
export const Container = styled.div`
    padding-bottom: 50px;
`
export const Caption = styled.h1`
    padding: 250px 0 50px 0;
    text-align: center;
    font-size: 40px;
    width: 346px;
    margin: 0 auto;
    font-weight: lighter;
`

export const Layout = styled.div<ILayout>`
    background-image: url('${(props) => props.background}');
    background-repeat: no-repeat;
    background-position: center top;
`

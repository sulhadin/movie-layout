import styled from 'styled-components'

export const Bar = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        justify-content: center;
    }
`
// export const Middle = styled.div`
//     display: table-cell;
//     vertical-align: middle;
// `

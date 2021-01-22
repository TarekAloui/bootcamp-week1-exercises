import styled from 'styled-components'
import palette from './palette'

export const ParentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${palette.light_primary};
    font-family: 'Roboto';
`

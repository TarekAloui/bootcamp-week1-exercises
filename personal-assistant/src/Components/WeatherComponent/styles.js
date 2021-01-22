import styled from 'styled-components'
import palette from '../../palette'

export const WeatherContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Greeting = styled.p`
    text-align: center;
    font-size: 50px;
    color: ${palette.primary_text_color};
`

export const DateComp = styled.p`
    text-align: center;
    font-size: 18px;
    color: ${palette.secondary_text};
`

export const WeatherImg = styled.img`
    border-radius: 100%;
    height: 200px;
`

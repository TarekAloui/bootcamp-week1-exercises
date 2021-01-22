import styled from 'styled-components'
import { Link } from 'react-router-dom'
import palette from '../../palette'

export const HomeButton = styled(Link)`
    font-size: 24px;
    margin: 5px;
    margin-right: 100px;
    color: ${palette.accent_color};
    text-decoration: none;
    
}
    `
export const TodoButton = styled(Link)`
    font-size: 24px;
    margin: 5px;
    color: ${palette.accent_color};
    text-decoration: none;
`
export const Bar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: ${palette.default_primary};
    padding: 10px 0px 10px 0px;
`

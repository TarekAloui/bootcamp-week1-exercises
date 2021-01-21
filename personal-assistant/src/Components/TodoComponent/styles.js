import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add'
import SearchIcon from '@material-ui/icons/Search'
import palette from '../../palette'

export const TodoComponentContainer = styled.div`
display: flex;
position: relative;
flex-direction: column;
background-color: ${palette.default_primary};
width: 50vw;
height: 70vh;
border-radius: 10px;
align-items: center;
align-self: center;
padding: 10px 5px 10px 5px;
`

export const ActionBarContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: ${palette.accent_color};
    width: 98%;
    box-sizing: border-box;
    min-height: 50px;
    border-radius: 30px;
    margin: 4px;
    display: flex;
    flex-direction: row;
    justify-content: space-between
`

export const SearchInput = styled.input`
    flex: 1;
    background-color: 'white';
    height: 75%;
    box-sizing: border-box;
    margin: 6px;
    border-radius: 20px;
    border-color: transparent;
    color: ${palette.secondary_text};
    font-size: 16px;
    padding-left: 30px;
    padding-right: 10px;
    &:focus{
        outline: none;
        box-shadow: none;
    }
`

export const ButtonStyled = styled.button`
    background-color: transparent;
    border: 0px;
    margin-right: 10px;
    height: fit-content;
`

export const AddButton = styled(AddIcon)({
  color: palette.text_primary_color,
})

export const SearchButton = styled(SearchIcon)({
  color: palette.text_primary_color,
})

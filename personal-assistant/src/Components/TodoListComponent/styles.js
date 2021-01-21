import styled from 'styled-components'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import palette from '../../palette'

export const TodoListParent = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    background-color: transparent;
    border-radius: 10px;
    align-items: center;
    align-self: center;
    width: 100%;
    height: fit-content;

    overflow: auto;
    scrollbar-color: transparent;

    --ms-overflow-style: none;

    ::-webkit-scrollbar {
        display: none;
    }
    ::-moz-scrollbar {
        display: none;
    }
`

export const TodoItem = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
    min-height: 50px;
    justify-content: flex-start;
    border-radius: 12px;
    background-color: ${palette.dark_primary};
    align-items: center;
    margin: 4px;
    padding-right: 10px;
`

export const TodoItemTitle = styled.div`
    flex: 2;
    font-size: 20px;
    color: ${palette.text_primary_color};
    margin: 5px 10px 5px 10px;
    font-family: 'Roboto';
`
export const ButtonStyled = styled.button`
    background-color: transparent;
    border: 0px;
`

export const AddButton = styled.button`
    font-size: 30px;
    color: #102027;
    background-color: #FFC107;
    border-radius: 20%;
    border: none;
    margin: 5px;
    width: 50px;
    height: 50px;
`

export const EditIconStyled = styled(EditIcon)({
  color: palette.primary_text_color,
})

export const DeleteIconStyled = styled(DeleteIcon)({
  color: palette.primary_text_color,
})

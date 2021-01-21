import styled from 'styled-components'
import palette from '../../palette'

export const CheckmarkIcon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => props.checked ? palette.accent_color : palette.light_primary};
  margin: 10px;
  border-radius: 3px;
  transition: all 150ms;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${palette.dark_primary};
  }
  ${CheckmarkIcon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
`

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`
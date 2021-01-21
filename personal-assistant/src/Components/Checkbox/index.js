import React from 'react'
import {CheckboxContainer, HiddenCheckbox, StyledCheckbox, CheckmarkIcon} from './styles'

// Checkbox Code used from https://medium.com/@colebemis/building-a-checkbox-component-with-react-and-styled-components-8d3aa1d826dd

const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked}>
            <CheckmarkIcon viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
            </CheckmarkIcon>
        </StyledCheckbox>
    </CheckboxContainer>
)

export default Checkbox
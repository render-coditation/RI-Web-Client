import styled, { css } from 'styled-components'

type FlexContainerProps = {
  gap?: string
}

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  ${(props) =>
    css`
      gap: ${props.gap};
    `}
`

export const FlexColumn = styled(FlexContainer)`
  flex-direction: column;
`

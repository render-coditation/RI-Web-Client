import styled, { css } from 'styled-components'

type ContainerProps = {
  bgColor: string
}

export const ToggleSwitchContainer = styled.label<ContainerProps>`
  position: relative;
  display: flex;
  align-content: center;
  width: 29.33px;
  height: 17.33px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input:checked + .slider {
    ${(props) =>
      css`
        background-color: ${props.bgColor};
      `}
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(14.67px);
    -ms-transform: translateX(14.67px);
    transform: translateX(14.67px);
  }
`

export const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  display: flex;
  align-items: center;

  ::before {
    position: absolute;
    content: '';
    height: 14.67px;
    width: 14.67px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`

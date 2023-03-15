import { Dropdown } from 'react-bootstrap'
import styled from 'styled-components'
import { BORDER_LIGHT_GRAY } from '../../constants/style/colors'

export const StyledDropdown = styled(Dropdown)`
  display: flex;

  .dropdown-toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;

    background-color: white;
    color: black;
    min-width: 12.5rem;
    flex: 1;

    border: 1px solid ${BORDER_LIGHT_GRAY};
    border-radius: 10px;
  }
  .dropdown-menu {
    min-width: 12.5rem;
    text-align: left;
    width: 100%;
  }

  .dropdown-item {
    color: #333;
  }

  .dropdown-item:hover {
    background-color: #eee;
  }

  .dropdown-toggle:active {
    background-color: white !important;
    color: black !important;
  }
`

/* eslint-disable @typescript-eslint/no-empty-function */
import { Button } from 'react-bootstrap'
import * as S from './style'

const Header = ({ headerTitle }: any) => {
  const handleAddNewProject = () => {
    console.log('dsds')
  }
  return (
    <>
      <S.PageTitle>{headerTitle}</S.PageTitle>
      <Button variant='primary' onClick={handleAddNewProject}>
        Primary
      </Button>{' '}
      <S.PaddedDivider />
    </>
  )
}
export default Header

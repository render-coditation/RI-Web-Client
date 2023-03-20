import { useState } from 'react'
import { Button } from 'src/components/Buttons'
import { SearchBox } from 'src/components/SearchBox'
import TwoStepForm from 'src/components/TwoStepForm'
import { HeaderRow, HeaderTitle, HeaderWrapper, PaddedDivider, SearchAndAddProject } from './style'
const Projects = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <HeaderWrapper>
        <HeaderRow>
          <HeaderTitle>Projects</HeaderTitle>
          <SearchAndAddProject>
            <SearchBox />
            <Button onClick={() => setShowModal(true)}>+Project</Button>
          </SearchAndAddProject>
        </HeaderRow>
        <HeaderRow>
          <HeaderTitle>Projects</HeaderTitle>
        </HeaderRow>
      </HeaderWrapper>
      <PaddedDivider dividerWidth='95%' />
      <TwoStepForm showModal={showModal} setShowModal={setShowModal} />
    </>
  )
}

export default Projects

/* eslint-disable camelcase */
import { useState } from 'react'
import { Form, Modal } from 'react-bootstrap'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { IoCloseSharp } from 'react-icons/io5'
import SearchBox from './SecondStep/SearchBox'
import { Button, PrimaryButton } from '../Buttons'
import * as S from './style'
import { createNewProjectService } from 'src/services/projects'
import { IUserDetails, IProjectDetails, ITwoStepFormProps } from './interfaces'
import ProjectDetails from './FirstStep/ProjectDetails'

const TwoStepForm = ({ showModal, setShowModal }: ITwoStepFormProps) => {
  const [activeStep, setActiveStep] = useState<number>(1)
  const [projectDetails, setProjectDetails] = useState<IProjectDetails>({
    projectName: '',
    createdBy: '',
    createdOn: '',
    deliveredBy: '',
    clientProjectCode: '',
    internalProjectCode: '',
    realProjectName: '',
  })

  const [selectedArtists, setSelectedArtists] = useState<IUserDetails[]>([])

  const handleReset = () => {
    setProjectDetails({
      projectName: '',
      createdBy: '',
      createdOn: '',
      deliveredBy: '',
      clientProjectCode: '',
      internalProjectCode: '',
      realProjectName: '',
    })

    // Close modal
    setShowModal(false)
    setActiveStep(1)
  }

  const handleProjectDetailsChange = (name: string, value: any) => {
    setProjectDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const renderProjectDetailsForm = () => (
    <ProjectDetails
      projectDetails={projectDetails}
      handleProjectDetailsChange={handleProjectDetailsChange}
    />
  )

  const renderAddUsersForm = () => <SearchBox setSelectedArtists={setSelectedArtists} />

  const handleSubmit = async () => {
    console.log('Project Details:', projectDetails)
    console.log('selectedArtists', selectedArtists)
    const datedeliveredBy = new Date(projectDetails.deliveredBy)
    const isoStringdeliveredBy = datedeliveredBy.toISOString().slice(0, 10) + 'T00:00:00Z'

    try {
      const response = await createNewProjectService({
        name: projectDetails.projectName,
        client_project_code: projectDetails.clientProjectCode,
        internal_code: projectDetails.internalProjectCode,
        real_name: projectDetails.internalProjectCode,
        delivery_date: isoStringdeliveredBy,
        created_by: '0352e83a-8d0a-47ff-b09a-00d0df67d9f9',
        storage_id: '80b30ef0-b741-47f5-8833-852b683a6440',
        artists: ['295c8645-208f-425d-958b-cbd3f60d84c7'],
      })

      handleReset()
    } catch (err) {
      console.error('Error while fetching project details: ', err)
    }
  }

  const handleNextStep = () => {
    setActiveStep((prevState: number) => prevState + 1)
  }

  const handlePrevStep = () => {
    setActiveStep((prevState: number) => prevState - 1)
  }

  const renderForm = () => {
    switch (activeStep) {
      case 1:
        return renderProjectDetailsForm()
      case 2:
        return renderAddUsersForm()
      default:
        return null
    }
  }

  const ModalHeader = () => (
    <>
      <S.FormHeaderWrapper>
        <S.FormHeader>
          <S.FormHeaderBackIcon onClick={handlePrevStep}>
            {activeStep != 1 && <IoMdArrowRoundBack size={30} />}
          </S.FormHeaderBackIcon>
          <S.FormHeaderText>New Project</S.FormHeaderText>
        </S.FormHeader>
        <S.FormHeaderCloseIcon onClick={handleReset}>
          <IoCloseSharp size={30} />
        </S.FormHeaderCloseIcon>
      </S.FormHeaderWrapper>
      {activeStep === 1 ? (
        <S.FormTitleWrapper>
          <S.FormTitle>
            <S.FormTitleNumber>1</S.FormTitleNumber>
            <S.FormTitleText>
              <b>Project Details</b>
            </S.FormTitleText>
          </S.FormTitle>
          <S.FormTitle>
            <S.FormTitleNumberInactive>2</S.FormTitleNumberInactive>
            <S.FormTitleText>Add Users</S.FormTitleText>
          </S.FormTitle>
        </S.FormTitleWrapper>
      ) : (
        <S.FormTitleWrapper>
          <S.FormTitle>
            <S.FormTitleNumberInactive>1</S.FormTitleNumberInactive>
            <S.FormTitleText>Project Details</S.FormTitleText>
          </S.FormTitle>
          <S.FormTitle>
            <S.FormTitleNumber>2</S.FormTitleNumber>
            <S.FormTitleText>
              <b>Add Users</b>
            </S.FormTitleText>
          </S.FormTitle>
        </S.FormTitleWrapper>
      )}
    </>
  )

  const RenderModalFooter = () => (
    <S.FooterWrapper>
      {activeStep > 1 && (
        <Button onClick={handlePrevStep} style={{ margin: '0 0.4rem' }}>
          Back
        </Button>
      )}

      {activeStep < 2 && (
        <Button
          onClick={() => {
            setProjectDetails({
              projectName: '',
              createdBy: '',
              createdOn: '',
              deliveredBy: '',
              clientProjectCode: '',
              internalProjectCode: '',
              realProjectName: '',
            })

            // Close modal
            setShowModal(false)
            setActiveStep(1)
          }}
          style={{ margin: '0 0.4rem' }}
        >
          Cancel
        </Button>
      )}

      {activeStep < 2 && <PrimaryButton onClick={handleNextStep}>Next</PrimaryButton>}

      {activeStep === 2 && <PrimaryButton onClick={handleSubmit}>Create</PrimaryButton>}
    </S.FooterWrapper>
  )

  return (
    <>
      <S.TwoStepModal
        show={showModal}
        onHide={() => {
          setShowModal(false)
          setActiveStep(1)
        }}
        width='615px'
      >
        <Modal.Body>
          <ModalHeader />
          {renderForm()}
          <RenderModalFooter />
        </Modal.Body>
      </S.TwoStepModal>
    </>
  )
}

export default TwoStepForm

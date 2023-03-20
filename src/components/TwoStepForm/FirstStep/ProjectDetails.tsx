import { Form } from 'react-bootstrap'
import * as S from '../style'

const ProjectDetails = ({ projectDetails, handleProjectDetailsChange }: any) => {
  return (
    <>
      <S.FormGroup controlId='projectName'>
        <S.FormLabels>Project Name</S.FormLabels>
        <S.PaddedDivider dividerWidth='22.2rem' />
        <Form.Control
          type='text'
          value={projectDetails.projectName}
          onChange={(e: { target: { value: any } }) =>
            handleProjectDetailsChange('projectName', e.target.value)
          }
        />
      </S.FormGroup>
      <S.FormGroup controlId='createdBy'>
        <S.FormLabels>Created By</S.FormLabels>
        <S.PaddedDivider dividerWidth='23.5rem' />
        <Form.Control
          type='text'
          value={projectDetails.createdBy}
          onChange={(e: { target: { value: any } }) =>
            handleProjectDetailsChange('createdBy', e.target.value)
          }
        />
      </S.FormGroup>
      <S.FormDatesWrapper>
        <S.FormGroup controlId='createdOn'>
          <S.FormLabels>Created On</S.FormLabels>
          <S.PaddedDivider dividerWidth='8rem' />
          <Form.Control
            type='date'
            value={projectDetails.createdOn}
            onChange={(e: { target: { value: any } }) =>
              handleProjectDetailsChange('createdOn', e.target.value)
            }
          />
        </S.FormGroup>

        <S.FormGroup controlId='deliveredBy'>
          <S.FormLabels>Delivered By</S.FormLabels>
          <S.PaddedDivider dividerWidth='8rem' />

          <Form.Control
            type='date'
            value={projectDetails.deliveredBy}
            onChange={(e: { target: { value: any } }) => {
              handleProjectDetailsChange('deliveredBy', e.target.value)
            }}
          />
        </S.FormGroup>
      </S.FormDatesWrapper>

      <S.FormGroup controlId='clientProjectCode'>
        <S.FormLabels>Client Project Code</S.FormLabels>
        <S.PaddedDivider dividerWidth='19.5rem' />
        <Form.Control
          type='text'
          value={projectDetails.clientProjectCode}
          onChange={(e: { target: { value: any } }) =>
            handleProjectDetailsChange('clientProjectCode', e.target.value)
          }
        />
      </S.FormGroup>
      <S.FormGroup controlId='internalProjectCode'>
        <S.FormLabels>Internal Project Code</S.FormLabels>
        <S.PaddedDivider dividerWidth='19rem' />
        <Form.Control
          type='text'
          value={projectDetails.internalProjectCode}
          onChange={(e: { target: { value: any } }) =>
            handleProjectDetailsChange('internalProjectCode', e.target.value)
          }
        />
      </S.FormGroup>
      <S.FormGroup controlId='realProjectName'>
        <S.FormLabels>Real Project Name</S.FormLabels>
        <S.PaddedDivider dividerWidth='20rem' />
        <Form.Control
          type='text'
          value={projectDetails.realProjectName}
          onChange={(e: { target: { value: any } }) =>
            handleProjectDetailsChange('realProjectName', e.target.value)
          }
        />
      </S.FormGroup>
    </>
  )
}

export default ProjectDetails

import React, { useState } from 'react'
import { Modal, Form, Button, ProgressBar } from 'react-bootstrap'

const TwoStepForm = () => {
  const [step, setStep] = useState(1)
  const [projectName, setProjectName] = useState('')
  const [createdBy, setCreatedBy] = useState('')
  const [createdOn, setCreatedOn] = useState('')
  const [deliveredBy, setDeliveredBy] = useState('')
  const [clientProjectCode, setClientProjectCode] = useState('')
  const [internalProjectCode, setInternalProjectCode] = useState('')
  const [realProjectName, setRealProjectName] = useState('')
  const [selectedArtists, setSelectedArtists] = useState([])

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handleSubmit = () => {
    // Handle form submission
  }

  return (
    <>hello</>
    // <Modal show={true} onHide={() => {}}>
    //   <Modal.Header closeButton>
    //     <Modal.Title>Add Project</Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
    //     <ProgressBar now={step * 50} />
    //     {step === 1 && (
    //       <div>
    //         <h5>Project Details</h5>
    //         <Form>
    //           <Form.Group controlId='formProjectName'>
    //             <Form.Label>Project Name</Form.Label>
    //             <Form.Control
    //               type='text'
    //               placeholder='Enter project name'
    //               value={projectName}
    //               onChange={(e) => setProjectName(e.target.value)}
    //             />
    //           </Form.Group>
    //           <Form.Group controlId='formCreatedBy'>
    //             <Form.Label>Created By</Form.Label>
    //             <Form.Control
    //               type='text'
    //               placeholder='Enter creator name'
    //               value={createdBy}
    //               onChange={(e) => setCreatedBy(e.target.value)}
    //             />
    //           </Form.Group>
    //           <Form.Group controlId='formCreatedOn'>
    //             <Form.Label>Created On</Form.Label>
    //             <Form.Control
    //               type='text'
    //               placeholder='Enter creation date'
    //               value={createdOn}
    //               onChange={(e) => setCreatedOn(e.target.value)}
    //             />
    //           </Form.Group>
    //           <Form.Group controlId='formDeliveredBy'>
    //             <Form.Label>Delivered By</Form.Label>
    //             <Form.Control
    //               type='text'
    //               placeholder='Enter delivery name'
    //               value={deliveredBy}
    //               onChange={(e) => setDeliveredBy(e.target.value)}
    //             />
    //           </Form.Group>
    //           <Form.Group controlId='formClientProjectCode'>
    //             <Form.Label>Client Project Code</Form.Label>
    //             <Form.Control
    //               type='text'
    //               placeholder='Enter client project code'
    //               value={clientProjectCode}
    //               onChange={(e) => setClientProjectCode(e.target.value)}
    //             />
    //           </Form.Group>
    //           <Form.Group controlId='formInternalProjectCode'>
    //             <Form.Label>Internal Project Code</Form.Label>
    //             <Form.Control
    //               type='text'
    //               placeholder='Enter internal project code'
    //               value={internalProjectCode}
    //               onChange={(e) => setInternalProjectCode(e.target.value)}
    //             />
    //           </Form.Group>
    //           <Form.Group controlId='formRealProjectName'>
    //             <Form.Label>Real Project Name</Form.Label>
    //             <Form.Control
    //               type='text'
    //               placeholder='Enter real project name'
    //               value={realProjectName}
    //               onChange={(e) => setRealProjectName(e.target.value)}
    //             />
    //           </Form.Group>
    //         </Form>
    //       </div>
    //     )}
    //     {step === 2 && (
    //       <div>
    //         <h5>Add Users</h5>
    //         <Form>
    //           <Form.Group controlId='formSearchArtists'>
    //             <Form.Label>Search Artists</Form.Label>
    //             <Form.Control type='text' placeholder='Enter artist name' />
    //           </Form.Group>
    //           <Form.Group controlId='formSelectedArtists'>
    //             <Form.Label>Selected Artists</Form.Label>
    //             <Form.Control
    //               as='select'
    //               multiple
    //               value={selectedArtists}
    //               onChange={(e) =>
    //                 setSelectedArtists(
    //                   Array.from(e.target.selectedOptions, (option) => option.value),
    //                 )
    //               }
    //             >
    //               <option>Artist 1</option>
    //               <option>Artist 2</option>
    //               <option>Artist 3</option>
    //             </Form.Control>
    //           </Form.Group>
    //         </Form>
    //       </div>
    //     )}
    //   </Modal.Body>
    //   <Modal.Footer>
    //     {step === 1 && (
    //       <Button variant='primary' onClick={handleNextStep}>
    //         Next
    //       </Button>
    //     )}
    //     {step === 2 && (
    //       <Button variant='primary' onClick={handleSubmit}>
    //         Submit
    //       </Button>
    //     )}
    //   </Modal.Footer>
    // </Modal>
  )
}
export default TwoStepForm

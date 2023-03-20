export interface IUserDetails {
  name: string
  email: string
  avatar: string
}

export interface IProjectDetails {
  projectName: string
  createdBy: string
  createdOn: string
  deliveredBy: string
  clientProjectCode: string
  internalProjectCode: string
  realProjectName: string
}

export interface ITwoStepFormProps {
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

import Header from '../components/Header'

interface GeneralPageProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string
}

function GeneralPage({ heading, ...rest }: GeneralPageProps) {
  return (
    <>
      <Header headerTitle={heading} />
      {/* Other components go here */}
    </>
  )
}

export default GeneralPage

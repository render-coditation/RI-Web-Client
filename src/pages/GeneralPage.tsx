import Header from 'src/components/Header'

interface GeneralPageProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string
}

function GeneralPage({ heading }: GeneralPageProps) {
  return (
    <>
      <Header headerTitle={heading} />
      {/* Other components go here */}
    </>
  )
}

export default GeneralPage

interface GeneralPageProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string
}

function GeneralPage({ heading, ...rest }: GeneralPageProps) {
  return (
    <>
      <br />
      <br />
      <br />
      <h1>{heading}</h1>
      {/* Other components go here */}
    </>
  )
}

export default GeneralPage

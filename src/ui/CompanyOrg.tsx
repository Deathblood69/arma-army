import { Fragment } from 'react'
import { useParams } from 'react-router'

export default function CompanyOrg() {
  const params = useParams()

  const brigade = params.brigade
  const battalion = params.battalion
  const company = params.company

  return (
    <Fragment>
      {brigade}
      {battalion}
      {company}
    </Fragment>
  )
}

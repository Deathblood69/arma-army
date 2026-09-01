import { Fragment } from 'react'
import { useParams } from 'react-router'

export default function BattalionOrg() {
  const params = useParams()

  const brigade = params.brigade
  const battalion = params.battalion

  return (
    <Fragment>
      {brigade}
      {battalion}
    </Fragment>
  )
}

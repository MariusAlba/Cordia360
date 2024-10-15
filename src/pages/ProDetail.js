import React from 'react'
import { useParams } from 'react-router-dom'

const ProDetail = () => {
    const params = useParams()
  return (
    <div>
        <h1> ProDetail</h1>
        <b> The product ID is {params.id}</b>
    </div>
  )
}

export default ProDetail
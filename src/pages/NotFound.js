import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
	<div>
	  <h2>Page not found!</h2>
	  <p>Lorem ipsum dolor sit amet</p>
	  <p>Got to the <Link to="/">Homepage</Link>.</p>
	</div>
  )
}

export default NotFound
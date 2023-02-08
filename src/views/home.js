import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Forward Accounts Liaison</title>
        <meta property="og:title" content="Forward Accounts Liaison" />
      </Helmet>
    </div>
  )
}

export default Home

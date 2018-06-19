import React from 'react'
import Link from 'gatsby-link'

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Home from '@material-ui/icons/Home'


const IndexPage = () => (
  <Paper>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Home/>
  </Paper>
)

export default IndexPage

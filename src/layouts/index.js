import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { withStyles } from '@material-ui/core/styles';

import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import GridContainer from '../components/Grid/GridContainer.jsx';
import GridItem from '../components/Grid/GridItem.jsx';
import Button from '../components/CustomButtons/Button.jsx';
import HeaderLinks from '../components/Header/HeaderLinks.jsx';
import Parallax from '../components/Parallax/Parallax.jsx';

import withRoot from '../withRoot';
import landingPageStyle from '../assets/jss/material-kit-react/views/landingPage.jsx';

const Index = ({ children, data, classes }) => (
    <div>
    <Helmet
    title={data.site.siteMetadata.title}
    meta={[
        { name: 'description', content: 'Philadelphia\'s largest ethically non-monogamous community.' },
        { name: 'keywords', content: 'polyamory, poly, polya, non-monogamy, enm, ethical non-monogamy, ethically non-monogamous, swinging, kink, alternative sexuality, alt-sex, community, facebook, philadelphia, philly, phl, queery, lgbtq, lgtbqia, trans, gay, lesbian, bisexual' },
    ]}
    >
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  </Helmet>
      <Header
          color="transparent"
          brand="Polydelphia"
          fixed
          changeColorOnScroll={{
              height: 400,
              color: "white"
          }}
      />
      <Parallax filter src={data.logo.src}>
          <div className={classes.container}>
              <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                      <h1 className={classes.title}>Your Story Starts With Us.</h1>
                      <h4>
                          Every landing page needs a small description after the big
                          bold title, that's why we added this text here. Add here all
                          the information that can make you or your product create the
                          first impression.
                      </h4>
                      <br />
                      <Button
                          color="danger"
                          size="lg"
                          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          <i className="fas fa-play" />Watch video
                      </Button>
                  </GridItem>
              </GridContainer>
          </div>
      </Parallax>
      <Grid container direction="column" alignItems="stretch" alignContent="stretch">
          <Grid item xs={12}>
          </Grid>
          <Grid item xs={12}>
              {children()}
          </Grid>
      </Grid>
  </div>
)

Index.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(landingPageStyle)(Index));

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    logo: contentfulAsset ( title: { eq: "Header" } ) {
      title
      sizes(maxWidth: 1400) {
        sizes
        src
        srcSet
      }
    }
  }
`

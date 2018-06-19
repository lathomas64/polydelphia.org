import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    img: {
        height: '300px'
    }
});

const Header = ({ header, siteTitle, classes }) => (
          <Img
            key={header.sizes.src}
            alt={header.title}
            sizes={header.sizes}
            className={classes.img}
            position="absolute"
          />
)

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);

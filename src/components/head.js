import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// https://www.gatsbyjs.com/docs/add-seo-component/

const Head = ({ title }) => {
  const seo = {
    title: title || 'Nguyen Quoc Cuong',
  };

  return (
    <Helmet title={title} defaultTitle={seo.title}>
      <html lang="en" />

      <meta name="google-site-verification" content="DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk" />
    </Helmet>
  );
};

export default Head;

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Head.defaultProps = {
  title: null,
  description: null,
  image: null,
};

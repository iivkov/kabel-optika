import React from 'react';
import '../App.css';
// import PropTypes from 'prop-types';

const TopImage = ({ selectedImage }) => {
    return (
    <div className="top-image" style={{ backgroundImage: `url(${selectedImage})` }}></div>
    )
};

// TopImage.propTypes = {
//     selectedImage: PropTypes.string.isRequired,
//   };

export default TopImage;
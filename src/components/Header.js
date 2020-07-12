import React from 'react';
import PropTypes from 'prop-types';

// stateless function component
const Header = ({ message }) => {
    return (
        <h2 className="Header text-center">
            {message}
        </h2>
    );
};

Header.propTypes = {
    message: PropTypes.string
};

export default Header;

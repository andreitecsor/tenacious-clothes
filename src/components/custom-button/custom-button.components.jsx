import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSingIn, inverted, ...otherProps}) => (
    <button
        className={`${inverted ? 'inverted' : '' } ${isGoogleSingIn ? 'google-sign-in' : '' } custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;
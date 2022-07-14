import React, { FC } from 'react';

import { ButtonProps } from './Button.types';
import StyledButton from './styled-Button';

const Button: FC<ButtonProps> = ({ children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};

// Button.defaultProps = {
//     px: 10,
//     py: 24,
// };

export default Button;

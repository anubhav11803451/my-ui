import { lighten } from 'polished';
import styled from 'styled-components';
import {
    background,
    border,
    color,
    layout,
    shadow,
    typography,
    variant,
    space,
    size,
    compose,
} from 'styled-system';

import { theme } from '../Theme';
import { ButtonProps } from './Button.types';

/*
*v5 style system
When using multiple categories or style functions together, 
use the compose utility before passing the functions to the styled higher order component. 
This will help ensure the best performance possible. */
const styleProps = compose(
    background,
    border,
    color,
    layout,
    shadow,
    typography,
    space,
    size,
);

const StyledButton = styled.button<ButtonProps>(
    (props) => ({
        borderRadius: 8,
        fontWeight: 500,
        fontSize: 14,
        margin: 8,
        padding: '10px 24px',
        minHeight: 40,
        border: 'none',
        opacity: props.disabled ? 0.5 : 1,
        cursor: props.disabled ? 'not-allowed' : 'pointer',
        '&:hover': {
            boxShadow: `0px 8px 12px -5px ${lighten(
                0.26,
                props.color || theme.colors.primary,
            )}`,
        },
    }),
    styleProps,
    (props) =>
        variant({
            variants: {
                submit: {
                    background: props.background || theme.colors.primary,
                    color: props.color || theme.colors.white,
                },
                reset: {
                    background: props.background || theme.colors.secondary,
                    color: props.color || theme.colors.secondaryDark,
                },
            },
        }),
);

export default StyledButton;

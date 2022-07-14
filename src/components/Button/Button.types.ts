import { HTMLAttributes } from 'react';
import {
    BackgroundProps,
    BorderProps,
    ColorProps,
    LayoutProps,
    ShadowProps,
    TypographyProps,
    SpaceProps,
    SizeProps,
} from 'styled-system';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    variant: 'submit' | 'reset';
    children: React.ReactNode;
    disabled?: boolean;
    as?: React.ElementType;
}

export type ButtonProps = Props &
    BackgroundProps &
    BorderProps &
    ColorProps &
    LayoutProps &
    ShadowProps &
    TypographyProps &
    SpaceProps &
    SizeProps;

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from './Button';
// import { ButtonProps } from './Button.types';

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'My-Ui/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

export const Submit: ComponentStory<typeof Button> = () => (
    <Button variant='submit'>Confirm</Button>
);

export const Reset: ComponentStory<typeof Button> = () => (
    <Button variant='reset'>Cancel</Button>
);

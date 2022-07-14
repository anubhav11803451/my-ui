import { DefaultTheme, ThemeProps } from 'styled-components';
// eslint-disable-next-line import/no-cycle
import { theme } from './Theme';

type ThemeType = typeof theme;

export interface Props extends ThemeProps<DefaultTheme> {
    theme: ThemeType;
}

export type MyUiThemeProps = Props;

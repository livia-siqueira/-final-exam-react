import 'styled-components'

import { themeTLG } from '@shared/styles/';

type theme = typeof themeTLG;

declare module 'styled-components' {
    export interface DefaultTheme extends theme{};
}
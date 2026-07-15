import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

// 앱과 동일한 테마 컨텍스트로 컴포넌트를 렌더하는 테스트 헬퍼
export const renderWithTheme = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

import { createTheme } from '@mui/material/styles';

// 앱 전역에서 재사용하는 커스텀 팔레트 토큰 타입 확장
declare module '@mui/material/styles' {
  interface Palette {
    surface: { main: string };
    timeline: { work: string; education: string };
    social: { github: string; linkedin: string };
  }
  interface PaletteOptions {
    surface?: { main: string };
    timeline?: { work: string; education: string };
    social?: { github: string; linkedin: string };
  }
}

const theme = createTheme({
  typography: {
    // MUI 컴포넌트 기본 폰트를 Roboto -> Pretendard로 통일 (본문 CSS와 일치)
    fontFamily: [
      'Pretendard Variable',
      'Pretendard',
      '-apple-system',
      'BlinkMacSystemFont',
      'system-ui',
      'Roboto',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'sans-serif',
    ].join(','),
  },
  palette: {
    // NOTE: 아래 색은 src/index.css 의 --color-* 토큰과 값이 동일해야 함 (동기화 유지).
    //       MUI theme(JS)는 CSS 변수를 읽지 못해 값을 미러링한다.
    // 타임라인 라인/카드 배경 등에 쓰이는 회색 표면 (= --color-surface)
    surface: { main: '#f8f9fa' },
    // Experience 아이콘 배경 (경력=인디고 --color-accent / 학력=티일 --color-accent-2)
    timeline: { work: '#4f46e5', education: '#0d9488' },
    // 소셜 아이콘 hover 색 (플랫폼별 유지)
    social: { github: 'black', linkedin: 'blue' },
  },
  components: {
    // 모든 Chip 라벨을 capitalize (StackChips 중복 sx 제거)
    MuiChip: {
      styleOverrides: {
        root: { textTransform: 'capitalize' },
      },
    },
    // 아이콘 버튼 기본 hover는 검정 (개별 인라인 sx 제거)
    MuiIconButton: {
      styleOverrides: {
        root: { '&:hover': { color: 'black' } },
      },
    },
  },
});

export default theme;

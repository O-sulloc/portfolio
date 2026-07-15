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
  palette: {
    // 타임라인 라인/카드 배경 등에 쓰이는 회색 표면
    surface: { main: '#f8f9fa' },
    // Experience 아이콘 배경 (경력 / 학력)
    timeline: { work: 'rgb(102, 255, 255)', education: 'rgb(102, 255, 102)' },
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

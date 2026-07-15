import { describe, it, expect } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { useContactForm } from './useContactForm';

describe('useContactForm', () => {
  it('초기 상태는 모두 닫힘/미설정이다', () => {
    const { result } = renderHook(() => useContactForm());

    expect(result.current.dialogOpen).toBe(false);
    expect(result.current.snackbarOpen).toBe(false);
    expect(result.current.emailStatus).toBeNull();
  });

  it('openDialog는 다이얼로그를 열고 closeDialog는 닫는다', () => {
    const { result } = renderHook(() => useContactForm());

    act(() => result.current.openDialog({ preventDefault: () => {} } as never));
    expect(result.current.dialogOpen).toBe(true);

    act(() => result.current.closeDialog());
    expect(result.current.dialogOpen).toBe(false);
  });

  it('confirmSend는 다이얼로그를 닫는다', () => {
    const { result } = renderHook(() => useContactForm());

    act(() => result.current.openDialog({ preventDefault: () => {} } as never));
    act(() => result.current.confirmSend());
    expect(result.current.dialogOpen).toBe(false);
  });
});

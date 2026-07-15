import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../test/render';
import StackChips from './StackChips';

describe('StackChips', () => {
  it('전달된 모든 스택을 칩으로 렌더한다', () => {
    renderWithTheme(<StackChips items={['React', 'TypeScript', 'Vite']} />);

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Vite')).toBeInTheDocument();
  });

  it('빈 배열이면 아무 칩도 렌더하지 않는다', () => {
    const { container } = renderWithTheme(<StackChips items={[]} />);

    expect(container.querySelectorAll('.MuiChip-root')).toHaveLength(0);
  });
});

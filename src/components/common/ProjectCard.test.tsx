import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../test/render';
import ProjectCard from './ProjectCard';

const baseProps = {
  thumb: '/assets/project/thumb.png',
  title: 'My Project',
  desc: 'A short description',
  stackList: ['React', 'Java'],
  siteLink: '',
  githubLink: '',
};

describe('ProjectCard', () => {
  it('제목·설명·스택을 렌더한다', () => {
    renderWithTheme(<ProjectCard {...baseProps} />);

    expect(screen.getByRole('heading', { name: 'My Project' })).toBeInTheDocument();
    expect(screen.getByText('A short description')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('githubLink가 있으면 github 버튼을 노출한다', () => {
    renderWithTheme(<ProjectCard {...baseProps} githubLink="https://github.com/x/y" />);

    const github = screen.getByLabelText('github');
    expect(github).toBeInTheDocument();
    expect(github).toHaveAttribute('href', 'https://github.com/x/y');
  });

  it('링크가 모두 비면 github/site 버튼을 숨긴다', () => {
    renderWithTheme(<ProjectCard {...baseProps} />);

    expect(screen.queryByLabelText('github')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('site')).not.toBeInTheDocument();
  });
});

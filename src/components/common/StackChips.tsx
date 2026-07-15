import { Chip, Stack } from '@mui/material';

type StackChipsProps = {
  items: string[];
  variant?: 'filled' | 'outlined';
};

// Stack/Project/Experience 카드에서 공유하는 기술 스택 Chip 리스트
const StackChips = ({ items, variant = 'filled' }: StackChipsProps) => (
  <Stack direction="row" className="stack-list-wrapper">
    {items.map((stack) => (
      <Chip className="stack-chip" key={stack} label={stack} variant={variant} />
    ))}
  </Stack>
);

export default StackChips;

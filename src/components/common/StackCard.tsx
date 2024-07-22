import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/free-regular-svg-icons'
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { Chip, Stack } from '@mui/material';

type StackCardProps = {
  iconName: IconDefinition,
  title: string,
  desc: string,
  stackList: string[],
}

const StackCard = ({ iconName, title, desc, stackList }: StackCardProps) => {
  return (
    <div className='stack-wrapper'>
      <FontAwesomeIcon icon={iconName} size='3x' className='stack-icon' />
      <h3 className='stack-title'> {title} </h3>
      <p className='stack-desc'> {desc} </p>
      <Stack direction="row" className='stack-list-wrapper'>
        {stackList.map((stack) => (
          <Chip 
            className='stack-chip'
            key={stack}
            label={stack}
            variant='outlined'
            sx={{ 
              textTransform: 'capitalize',
              '& .MuiChip-root': { margin: '10px' },
            }} 
          />
        ))}
      </Stack>
    </div>
  )
}

export default StackCard;
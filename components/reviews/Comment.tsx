'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Comment = ({ comment }: { comment: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const longComment = comment.length > 300;
  const displayedComment =
    longComment && !isExpanded ? `${comment.slice(0, 300)}...` : comment;

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p className='text-sm'>{displayedComment}</p>
      {longComment && (
        <Button
          type='button'
          onClick={handleExpand}
          size={'sm'}
          variant={'link'}
          className='pl-0 text-muted-foreground'
        >
          {isExpanded ? 'Show less' : 'Show more'}
        </Button>
      )}
    </div>
  );
};
export default Comment;

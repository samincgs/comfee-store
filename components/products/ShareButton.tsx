'use client';
import { ExternalLink } from 'lucide-react';
import {
  LinkedinIcon,
  LinkedinShareButton,
  EmailIcon,
  EmailShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

const ShareButton = ({
  productId,
  name,
}: {
  productId: string;
  name: string;
}) => {
  const shareLink = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/products/${productId}`;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size='icon' variant={'outline'}>
          <ExternalLink className='w-4 h-4' />
        </Button>
      </PopoverTrigger>
      <PopoverContent side='bottom' sideOffset={10} className='w-40'>
        <div className='flex items-center justify-center gap-2'>
          <LinkedinShareButton url={shareLink} title={name}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <TwitterShareButton url={shareLink} title={name}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <EmailShareButton url={shareLink} title={name}>
            <EmailIcon size={32} round />
          </EmailShareButton>
        </div>
      </PopoverContent>
    </Popover>
  );
};
export default ShareButton;

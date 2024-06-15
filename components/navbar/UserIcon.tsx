import { currentUser } from '@clerk/nextjs/server';
import { LucideUser2 } from 'lucide-react';

const UserIcon = async () => {
  const user = await currentUser();
  const profileImage = user?.imageUrl;

  return (
    <>
      {profileImage ? (
        <img
          src={profileImage}
          alt='Profile image'
          className='w-6 h-6 rounded-full object-cover'
        />
      ) : (
        <LucideUser2 className='w-5 h-5 bg-primary rounded-full text-white' />
      )}
    </>
  );
};

export default UserIcon;

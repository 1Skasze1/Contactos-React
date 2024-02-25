'use client';

import { useRouter } from 'next/navigation'
import { useEffect } from 'react';

export default function ContactsErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {

  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className='flex flex-col items-center gap-2'>
        <h2 className='text-xl'>Something went wrong!</h2>
        <p className='text-zinc-600 text-lg'>{ error.message }</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md transition-colors ease-in duration-200 hover:bg-blue-600"
          onClick={() => reset()}
        >
          Try again
        </button>
        <button
          className="text-blue-500 px-4 py-2 underline"
          onClick={() => router.replace('/contacts')}
        >
          Go back
        </button>
      </div>
    </div>
  );
}


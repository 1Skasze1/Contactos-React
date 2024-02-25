'use client';

import Image from 'next/image';
import { getContactById } from '../lib/getContactById';
import { deleteContactById } from '../lib/deleteContacts';
import { use } from 'react';
import { useRouter } from 'next/navigation';


interface Props {
  contactId: string;
}

export default function ContactDetail({ contactId }: Props) {
  const contact = getContactById(contactId);
  const router = useRouter();

  if (!contact) {
    throw new Error('Contact not found');
  }

  const handleDelete = () => {
    deleteContactById(contactId);
    router.replace('/contacts');
    
  };
  return (
    <div className="p-4 bg-zinc-200 rounded-md flex items-center gap-1">
      <Image
        src={contact.photoURL}
        alt={`Profile picture's ${contact.firstName} ${contact.lastName}`}
        width={512}
        height={512}
        className="rounded-full object-cover w-20 h-20"
      />
      <div>
        <h2 className='text-xl'>
          {contact.firstName} {contact.lastName}
          <span className='ml-1'>
            {contact.favorite ? '⭐️' : ''}
          </span>
        </h2>

        {contact.handle && (
          <a href={contact.handle.url} target="_blank">
            {contact.handle.title}
          </a>
        )}
      </div>
      <button className='bg-red-500 text-white px-4 py-2 rounded-md transition-colors ease-in duration-200 hover:bg-red-600' type="submit" 
      onClick={handleDelete}>Eliminar Contacto</button>
    </div>
  );
}

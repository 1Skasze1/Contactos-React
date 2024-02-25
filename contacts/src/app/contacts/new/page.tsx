'use client';

import { Contact } from '@/app/lib/interfaces/contact.interface'
import { saveContactToLocalStorage } from '@/app/lib/saveContactToLocalStorage'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

export default function SaveContactPage() {
  const router = useRouter();

  const onSaveContact = (event: FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const contact: Omit<Contact, 'id'> = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      favorite: formData.get('favorite') === 'on',
      photoURL: formData.get('photoURL') as string,
      handle: {
        title: formData.get('handle') as string,
        url: formData.get('handle') as string,
      }
    };
    
    saveContactToLocalStorage(contact);
    router.replace('/contacts');
  }

  return (
    <main>
      <h2>Crea un nuevo contacto!</h2>

      <form className='flex flex-col gap-2' onSubmit={onSaveContact}>
        <input className='border border-zinc-400 p-2 rounded-md' type="text" name='firstName' placeholder='Escribe el nombre(s)' required />
        <input className='border border-zinc-400 p-2 rounded-md' type="text" name='lastName' placeholder='Escribe los apellidos'  required />
        <label className='flex gap-1'>
          <input type="checkbox" name='favorite'/>
          Añadir a favoritos
        </label>
        <input className='border border-zinc-400 p-2 rounded-md' type="text" name='photoURL' placeholder='Añade la URL de la foto' required />
        <input className='border border-zinc-400 p-2 rounded-md' type="text" name='handle' placeholder='Enter your handle name' />
        <input className='border border-zinc-400 p-2 rounded-md' type="text" name='handle' placeholder='Enter your handle url' />
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md transition-colors ease-in duration-200 hover:bg-blue-600' type="submit">Guardar contacto</button>
      </form>
    </main>
  )
}

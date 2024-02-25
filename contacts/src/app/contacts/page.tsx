import Link from 'next/link';
import ContactsList from '../ui/ContactsList'
import { Suspense } from 'react';

export default async function ContactsPage() {
  return (
    <main>
      <h1>Listado de contactos</h1>
      <div>
      <Suspense fallback={<div>Loading...</div>}> 
      <ContactsList />
      </Suspense>
      <Link href="/contacts/favorites" className='bg-yellow-500 text-white px-4 py-2 rounded-md transition-colors ease-in duration-200 hover:bg-yellow-600 flex justify-center items-center gap-1' 
      >Ver favoritos</Link>
      </div>
      <div>
      <Link href ="/contacts/new" className='bg-blue-500 text-white px-4 py-2 rounded-md transition-colors ease-in duration-200 hover:bg-blue-600 flex justify-center items-center gap-1'
      >Crear contacto</Link>
      </div>
    </main>
  );
}

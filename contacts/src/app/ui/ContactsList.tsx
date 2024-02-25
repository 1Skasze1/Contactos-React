'use client';

import Link from 'next/link';
import { getContactsFromLocalStorage } from '../lib/getContactsFromLocalStorage';
import { Suspense } from 'react';
interface Props {
  favorite?: boolean;
}
export default function ContactsList({ favorite }: Props) {
  const contacts = getContactsFromLocalStorage();
  const filteredContacts = favorite
    ? contacts.filter((contact) => contact.favorite)
    : contacts;
  return filteredContacts.map(({ firstName, lastName, id }) => (
    <Link
      className="block my-2 p-4 bg-zinc-200 hover:bg-blue-500 hover:text-white transition-colors ease-in duration-200 rounded-md"
      href={`/contacts/${id}`}
      key={id}
    >
      Detalles del contacto {`${firstName} ${lastName}`}.
    </Link>
  ));
}

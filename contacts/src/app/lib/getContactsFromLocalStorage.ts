import { Contact } from './interfaces/contact.interface';

export function getContactsFromLocalStorage() {
  const contactsFromLocalStorage = localStorage.getItem('contacts');
  const contacts: Contact[] = JSON.parse(contactsFromLocalStorage || '[]');

  return contacts;
}

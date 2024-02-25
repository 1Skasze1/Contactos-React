import { getContactsFromLocalStorage } from './getContactsFromLocalStorage';
import { Contact } from './interfaces/contact.interface';
import { v4 as uuid } from 'uuid';

export function saveContactToLocalStorage(contact: Omit<Contact, 'id'>) {
  const contacts: Contact[] = getContactsFromLocalStorage();
  
  const contactToSave = {
    ...contact,
    id: uuid(),
  }
  contacts.push(contactToSave);
  
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

import { getContactsFromLocalStorage } from './getContactsFromLocalStorage'

export function deleteContactById(id: string) {
  const contacts = getContactsFromLocalStorage();
  const newContacts = contacts.filter((contact) => contact.id !== id);
  localStorage.setItem('contacts', JSON.stringify(newContacts));
}
import { getContactsFromLocalStorage } from './getContactsFromLocalStorage'

export function getContactById(id: string) {
  const contacts = getContactsFromLocalStorage();
  return contacts.find((contact) => contact.id === id);
}
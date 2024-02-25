import { Handle } from './handle.interface';

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  favorite: boolean;
  photoURL: string;
  handle?: Handle;
}

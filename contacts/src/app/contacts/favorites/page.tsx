import { getContactsFromLocalStorage } from "@/app/lib/getContactsFromLocalStorage";
import ContactsList from "@/app/ui/ContactsList";

export default function FavoritesPage() {

  return (
    <main>
      <h1>Favorites</h1>
      <ContactsList favorite />
    </main>
  )
}
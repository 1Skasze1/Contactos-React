import { getContactById } from '@/app/lib/getContactById'
import ContactDetail from '@/app/ui/ContactDetail'
import { notFound } from 'next/navigation'
import { Suspense } from 'react';

export default function ContactPage({ params }: {params: {contactId: string}}) {
  const { contactId } = params;

  if (!contactId) {
    notFound();
  }
  return (
    <Suspense fallback={<div>Cargando...</div>}>
    <ContactDetail contactId={contactId} />
    </Suspense>
  )
}
import Link from 'next/link';

export default function ContactsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <nav className="bg-zinc-200 mb-4 p-4 rounded-b-md">
        <Link href="/contacts">
          <h1 className="text-2xl text-blue-500">Contacts App</h1>
        </Link>
      </nav>
      {children}
    </div>
  );
}

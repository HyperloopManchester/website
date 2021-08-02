import Head from 'next/head';
import Link from 'next/link';

import Navbar from './Navbar';

export default function Layout({ title, description, children }) {
  return (
    <div>
      <Head>
        <title>{title ?? 'Hyperloop Manchester'}</title>
        <meta name="description" content={description ?? 'Hyperloop Manchester'} />
      </Head>

      <Navbar />
      <hr />
      <main>
        {children}
      </main>
      <hr />
      
      <footer className="footer">
        <div className="text-center">
          <span>Hyperloop Manchester © 2021</span>
        </div>
      </footer>
    </div>
  );
}

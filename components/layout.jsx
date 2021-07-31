import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ title, description, children }) {
  return (
    <div>
      <Head>
        <title>{title ?? 'Hyperloop Manchester'}</title>
        <meta name="description" content={description ?? 'Hyperloop Manchester'} />
      </Head>
      <header className="header">
        <nav className="navbar flex-spaced">
          <input type="checkbox" className="hidden-input menu-toggle" id="menu-toggler" />
          <ul className="navbar-menu" id="menu">
            <li>
              <label className="menu-toggle-label" htmlFor="menu-toggler">
                <img className="menu-toggle-icon" src="/menu.svg" alt="menu" />
              </label>
            </li>
            <Link href="/" passHref><li className="menu-brand menu-link">Hyperloop Manchester</li></Link>
            <Link href="/events" passHref><li className="menu-link">Events</li></Link>
            <Link href="/team" passHref><li className="menu-link">Team</li></Link>
          </ul>
        </nav>
      </header>
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

import React from "react";

import Head from "next/head";
import Link from "next/link";

import Modal from "./Modal.jsx";

import styles from "../pages/index.module.css";

export default function Layout({ title, description, children }) {
  return (
    <div>
      <Head>
        <title>{title ?? "Hyperloop Manchester"}</title>
        <meta
          name="description"
          content={description ?? "Hyperloop Manchester"}
        />
      </Head>

      <nav className="navbar flex-spaced">
        <input
          type="checkbox"
          className="hidden-input menu-toggle"
          id="menu-toggler"
        />
        <ul className="navbar-menu" id="menu">
          <Link href="/index.html" passHref>
            <li className="menu-brand menu-link">
              <img src="/images/brand.png" height="50" />
            </li>
          </Link>
         <Link href="/teams/2021-2022.html" passHref>
            <li className="menu-link">Teams</li>
          </Link>
          <Link href="/news.html" passHref>
            <li className="menu-link">News</li>
          </Link>
          <Link href="/events.html" passHref>
            <li className="menu-link">Events</li>
          </Link>
          <Link href="/recruitment.html" passHref>
            <li className="menu-link">Recruitment</li>
          </Link>
        </ul>
          <label className="menu-toggle-label" htmlFor="menu-toggler">
            <img className="menu-toggle-icon" src="/menu.svg" alt="menu" />
          </label>
      </nav>
      <hr />
      <main>
        {children}
      </main>
      <hr />
      <footer className="footer">
        <div className="row" style={{ justifyContent: "space-between" }}>
          <ul className={styles.footerList}>
            <li>
              <Link href="/tos.html">Terms of Service</Link>
            </li>
            <li>
              <Link href="/privacy.html">Privacy</Link>
            </li>
            <li>
              <span>Hyperloop Manchester © 2021</span>
            </li>
          </ul>
          <ul className={styles.footerList}>
            <li>
              <a
                href="https://www.facebook.com/hyperloopmanchester"
                className="footer-icon"
              >
                <img height="32" src="/facebook.svg" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/hyperloopmanchester"
                className="footer-icon"
              >
                <img height="32" src="/instagram.svg" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/hyperloop-manchester/"
                className="footer-icon"
              >
                <img height="32" src="/linkedin.svg" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCsYvlEDWWNyEILW94FmIXOg"
                className="footer-icon"
              >
                <img height="32" src="/youtube.svg" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/hyperloopmcr"
                className="footer-icon"
              >
                <img height="32" src="/twitter.svg" />
              </a>
            </li>
            <li>
              <a
                href="mailto:hyperloopmanchester@gmail.com"
                className="footer-icon"
              >
                <img height="32" src="/email.svg" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

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
          <Link href="/" passHref>
            <li className="menu-brand menu-link">
              <img src="/images/new_logo_horizontal.jpg" height="50" />
            </li>
          </Link>
          <Link href="/" passHref>
            <li className="menu-link">About Us</li>
          </Link>
          {/*<Link href="/" passHref>
            <li className="menu-link">Hyperloop</li>
  </Link>*/}
          <Link href="/teams/2022-2023" passHref>
            <li className="menu-link">Teams</li>
          </Link>
          <Link href="/ehw" passHref>
            <li className="menu-link">EHW</li>
          </Link>
          <Link href="/partners" passHref>
            <li className="menu-link">Partners</li>
          </Link>
          <Link href="/news" passHref>
            <li className="menu-link">Media</li>
          </Link>{/*}
          <Link href="/" passHref>
            <li className="menu-link">Contact</li>
</Link>*/}
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
              <span>Hyperloop Manchester © 2021</span>
            </li>
            <li>
              <Link href="/tos">Terms</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
            
          </ul>
          <ul className={styles.footerList}>
            <li>
              <a
                href="https://www.facebook.com/hyperloopmanchester"
                className="footer-icon"
              >
                <img height="32" src="/facebook_white.jpg" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/hyperloopmanchester"
                className="footer-icon"
              >
                <img height="32" src="/insta_white.jpg" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/hyperloop-manchester/"
                className="footer-icon"
              >
                <img height="32" src="/linkedin_white.jpg" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCsYvlEDWWNyEILW94FmIXOg"
                className="footer-icon"
              >
                <img height="32" src="/youtube_white.jpg" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/hyperloopmcr"
                className="footer-icon"
              >
                <img height="32" src="/twitter_white.jpg" />
              </a>
            </li>
            <li>
              <a
                href="mailto:hyperloopmanchester@gmail.com"
                className="footer-icon"
              >
                <img height="22" src="/email_white.png" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

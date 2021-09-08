import React from 'react';

import Link from 'next/link';

import styles from '../pages/teams.module.css';

export default function TeamNavbar({ teams }) {
  return (
    <div>
      <div className="row row-left" style={{padding: "0 1em"}}>
        {
          teams.map(({ year }, idx) => (
            <Link key={idx} href={`/teams/${year}`} passHref>
              <button className={styles.yearButton}>{year}</button>
            </Link>
          ))
        }
      </div>
      <hr/>
    </div>
  );
}

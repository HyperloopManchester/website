import React from 'react';

import Layout from '../components/Layout.jsx';
import TeamNavbar from '../components/TeamNavbar.jsx';

import { getAllMembers } from '../lib/members.js';

import styles from './index.module.css';

export async function getStaticProps() {
  return {
    props: {
      teams: getAllMembers()
    },
  }
}

export default function Team({ teams }) {
  return (
    <div>
      <Layout>
        <TeamNavbar teams={teams} />
        <div className={`wide-container ${styles.separator}`}>
          Software Team
        </div>
        <ul>
          <li>
            Any software assistance required by other teams, mostly Electronics,
            currently coding the state machine (using MATLAB Stateflow software).
          </li>
        </ul>
      </Layout>
    </div>
  );
}

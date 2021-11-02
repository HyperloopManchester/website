import React from "react";

import Layout from "../../components/Layout.jsx";
import TeamNavbar from "../../components/TeamNavbar.jsx";

import { getAllMembers } from "../../lib/members.js";

import styles from "../index.module.css";

export async function getStaticPaths() {
  return {
    paths: getAllMembers().map(({ filename }) => {
      return {
        params: {
          year: filename.split(".")[0],
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const all = getAllMembers();
  return {
    props: {
      teams: all,
      current: all.filter(({ year }) => year === params.year)[0],
    },
  };
}

function memberCard({ name, position, photoUrl, isFoundingMember }, index) {
  return (
    <div key={index} className="member-card">
      <div className="text-center">
        {photoUrl && (
          <img src={photoUrl} className="responsive-image member-photo" />
        )}
      </div>
      <div className="text-center text-break">
        <span style={{ color: "var(--theme-bg-accent)", fontWeight: "bolder" }}>{name}</span>
        <br />
        {isFoundingMember && <span style={{ color: "var(--theme-bg-accent)" }}>Founding Member</span>}
        {isFoundingMember && <br />}
        <span>{position}</span>
      </div>
    </div>
  );
}

export default function Team({ teams, current }) {
  return (
    <Layout title={current.year}>
      <TeamNavbar teams={teams} />
      {current.teams.map(({ name, description, members }, idx) => (
        <div key={idx}>
          <div className={`wide-container ${styles.separator}`}>{name}</div>
          <div className="row">
            {members.filter(({ photoUrl }) => photoUrl).map(memberCard)}
          </div>
          <div className="row">
            {members
              .filter(({ photoUrl }) => (!photoUrl || photoUrl === undefined))
              .map(memberCard)}
          </div>
        </div>
      ))}
    </Layout>
  );
}
